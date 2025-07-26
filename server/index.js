const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { Pool, neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

// Configure WebSocket for Neon
neonConfig.webSocketConstructor = ws;

// Database setup
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Database query helpers
async function insertVisitor(data) {
  const query = `
    INSERT INTO visitors (session_id, user_agent, referrer, ip_address, visited_at)
    VALUES ($1, $2, $3, $4, NOW())
    ON CONFLICT (session_id) DO NOTHING
    RETURNING id
  `;
  const values = [data.sessionId, data.userAgent, data.referrer, data.ipAddress];
  return await pool.query(query, values);
}

async function insertNewsletterSignup(data) {
  const query = `
    INSERT INTO newsletter_signups (email, name, source, subscribed_at)
    VALUES ($1, $2, $3, NOW())
    ON CONFLICT (email) DO NOTHING
    RETURNING id
  `;
  const values = [data.email, data.name, data.source || 'landing_page'];
  return await pool.query(query, values);
}

async function insertContactSubmission(data) {
  const query = `
    INSERT INTO contact_submissions (name, email, subject, message, submitted_at)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING id
  `;
  const values = [data.name, data.email, data.subject, data.message];
  return await pool.query(query, values);
}

const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Enable CORS for API endpoints
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // API endpoints
  if (pathname.startsWith('/api/')) {
    let body = '';
    
    if (req.method === 'POST') {
      req.on('data', chunk => {
        body += chunk.toString();
      });
      
      req.on('end', async () => {
        try {
          const data = JSON.parse(body);
          
          // Visitor tracking endpoint
          if (pathname === '/api/track-visitor') {
            try {
              await insertVisitor(data);
              console.log('Visitor tracked:', data);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error('Error tracking visitor:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to track visitor' }));
            }
            return;
          }
          
          if (pathname === '/api/newsletter-signup') {
            try {
              await insertNewsletterSignup(data);
              console.log('Newsletter signup:', data);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, message: 'Successfully subscribed!' }));
            } catch (error) {
              console.error('Error with newsletter signup:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to subscribe' }));
            }
            return;
          }
          
          if (pathname === '/api/contact') {
            try {
              await insertContactSubmission(data);
              console.log('Contact submission:', data);
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
            } catch (error) {
              console.error('Error with contact submission:', error);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Failed to send message' }));
            }
            return;
          }
          
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Endpoint not found' }));
          
        } catch (error) {
          console.error('API Error:', error);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Internal server error' }));
        }
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, '..', pathname === '/' ? 'index.html' : pathname);
  
  // Security check to prevent directory traversal
  if (!filePath.startsWith(path.join(__dirname, '..'))) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }
  
  const extname = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
