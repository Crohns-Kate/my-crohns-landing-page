import { visitors, newsletterSignups, purchases, faqInteractions, contactSubmissions, type InsertVisitor, type InsertNewsletterSignup, type InsertPurchase, type InsertFaqInteraction, type InsertContactSubmission } from "../shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  // Visitor tracking
  trackVisitor(visitor: InsertVisitor): Promise<void>;
  
  // Newsletter signups
  addNewsletterSignup(signup: InsertNewsletterSignup): Promise<void>;
  
  // Purchase tracking
  recordPurchase(purchase: InsertPurchase): Promise<void>;
  
  // FAQ interactions
  trackFaqInteraction(interaction: InsertFaqInteraction): Promise<void>;
  
  // Contact submissions
  submitContact(contact: InsertContactSubmission): Promise<void>;
  getContactSubmissions(): Promise<typeof contactSubmissions.$inferSelect[]>;
}

export class DatabaseStorage implements IStorage {
  async trackVisitor(visitor: InsertVisitor): Promise<void> {
    await db.insert(visitors).values(visitor);
  }

  async addNewsletterSignup(signup: InsertNewsletterSignup): Promise<void> {
    await db.insert(newsletterSignups).values(signup).onConflictDoNothing();
  }

  async recordPurchase(purchase: InsertPurchase): Promise<void> {
    await db.insert(purchases).values(purchase);
  }

  async trackFaqInteraction(interaction: InsertFaqInteraction): Promise<void> {
    await db.insert(faqInteractions).values(interaction);
  }

  async submitContact(contact: InsertContactSubmission): Promise<void> {
    await db.insert(contactSubmissions).values(contact);
  }

  async getContactSubmissions(): Promise<typeof contactSubmissions.$inferSelect[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }
}

export const storage = new DatabaseStorage();