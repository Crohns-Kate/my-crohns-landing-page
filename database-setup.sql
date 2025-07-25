-- Database initialization for Crohn's Survival Kit Landing Page
-- Run this in your Neon database after creating it

-- This will be handled automatically by Drizzle, but keeping for reference

-- Visitors table for tracking analytics
-- CREATE TABLE IF NOT EXISTS visitors (
--   id SERIAL PRIMARY KEY,
--   session_id VARCHAR(255) UNIQUE NOT NULL,
--   user_agent TEXT,
--   referrer TEXT,
--   ip_address INET,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Newsletter signups table (if you add this feature later)
-- CREATE TABLE IF NOT EXISTS newsletter_signups (
--   id SERIAL PRIMARY KEY,
--   email VARCHAR(255) UNIQUE NOT NULL,
--   source VARCHAR(100) DEFAULT 'landing_page',
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Contact form submissions table (if you add this feature later)
-- CREATE TABLE IF NOT EXISTS contact_submissions (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   message TEXT NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- FAQ interactions tracking
-- CREATE TABLE IF NOT EXISTS faq_interactions (
--   id SERIAL PRIMARY KEY,
--   session_id VARCHAR(255),
--   question_id VARCHAR(100),
--   action VARCHAR(50), -- 'open', 'close'
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Note: Drizzle ORM will automatically create these tables based on your schema.ts file