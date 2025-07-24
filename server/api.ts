import { storage } from './storage';

// Simple API handler function for handling different endpoints
export async function handleApiRequest(path: string, method: string, body?: any, headers?: Record<string, string>): Promise<Response> {
  try {
    // Track visitor for analytics
    if (method === 'POST' && path === '/api/track-visitor') {
      const { sessionId, userAgent, referrer, ipAddress } = body;
      await storage.trackVisitor({
        sessionId,
        userAgent,
        referrer,
        ipAddress,
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Newsletter signup
    if (method === 'POST' && path === '/api/newsletter-signup') {
      const { email, source } = body;
      await storage.addNewsletterSignup({ email, source });
      return new Response(JSON.stringify({ success: true, message: 'Successfully subscribed!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Track FAQ interactions
    if (method === 'POST' && path === '/api/track-faq') {
      const { questionId, sessionId, interactionType } = body;
      await storage.trackFaqInteraction({
        questionId,
        sessionId,
        interactionType,
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Contact form submission
    if (method === 'POST' && path === '/api/contact') {
      const { name, email, message } = body;
      await storage.submitContact({ name, email, message });
      return new Response(JSON.stringify({ success: true, message: 'Message sent successfully!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Record purchase (webhook from Stripe)
    if (method === 'POST' && path === '/api/record-purchase') {
      const { email, stripePaymentId, amount, currency, status } = body;
      await storage.recordPurchase({
        email,
        stripePaymentId,
        amount,
        currency,
        status,
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Get analytics data (simple endpoint for checking data)
    if (method === 'GET' && path === '/api/contacts') {
      const contacts = await storage.getContactSubmissions();
      return new Response(JSON.stringify(contacts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ error: 'Endpoint not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}