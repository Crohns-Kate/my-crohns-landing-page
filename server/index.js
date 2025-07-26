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
