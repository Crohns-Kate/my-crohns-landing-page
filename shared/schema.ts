import { pgTable, serial, text, timestamp, boolean, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Users table for potential customer tracking and analytics
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Landing page visitors for analytics tracking
export const visitors = pgTable('visitors', {
  id: serial('id').primaryKey(),
  sessionId: text('session_id').notNull(),
  userAgent: text('user_agent'),
  referrer: text('referrer'),
  ipAddress: text('ip_address'),
  visitedAt: timestamp('visited_at').defaultNow(),
});

// Newsletter signups (in case you want to capture emails before purchase)
export const newsletterSignups = pgTable('newsletter_signups', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  source: text('source'), // landing page, referral, etc.
  subscribedAt: timestamp('subscribed_at').defaultNow(),
});

// Purchase tracking for conversion analytics
export const purchases = pgTable('purchases', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  stripePaymentId: text('stripe_payment_id'),
  amount: integer('amount'), // in cents
  currency: text('currency').default('usd'),
  status: text('status'), // completed, pending, failed
  purchasedAt: timestamp('purchased_at').defaultNow(),
});

// FAQ interactions tracking (which questions are most viewed)
export const faqInteractions = pgTable('faq_interactions', {
  id: serial('id').primaryKey(),
  questionId: text('question_id').notNull(),
  sessionId: text('session_id'),
  interactionType: text('interaction_type'), // viewed, expanded
  interactedAt: timestamp('interacted_at').defaultNow(),
});

// Contact form submissions
export const contactSubmissions = pgTable('contact_submissions', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false),
  submittedAt: timestamp('submitted_at').defaultNow(),
});

// Define relations
export const usersRelations = relations(users, ({ many }) => ({
  purchases: many(purchases),
}));

export const purchasesRelations = relations(purchases, ({ one }) => ({
  user: one(users, {
    fields: [purchases.email],
    references: [users.email],
  }),
}));

// Type exports for use in the application
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Visitor = typeof visitors.$inferSelect;
export type InsertVisitor = typeof visitors.$inferInsert;

export type NewsletterSignup = typeof newsletterSignups.$inferSelect;
export type InsertNewsletterSignup = typeof newsletterSignups.$inferInsert;

export type Purchase = typeof purchases.$inferSelect;
export type InsertPurchase = typeof purchases.$inferInsert;

export type FaqInteraction = typeof faqInteractions.$inferSelect;
export type InsertFaqInteraction = typeof faqInteractions.$inferInsert;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;