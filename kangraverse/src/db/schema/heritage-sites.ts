import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const heritageSites = pgTable("heritage_sites", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),

  description: text("description"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});