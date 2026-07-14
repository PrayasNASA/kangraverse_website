# DEVELOPMENT_RULES.md

Version: 1.0

---

# Purpose

This document defines the mandatory development rules for KangraVerse.

Every AI-generated file, component, API, database migration, and feature must comply with these rules.

These rules take precedence over default coding preferences.

---

# Core Philosophy

KangraVerse is a research-focused Digital Heritage WebGIS platform.

The application must prioritize:

1. Simplicity
2. Maintainability
3. Performance
4. Accessibility
5. Reusability
6. Scalability

Never introduce unnecessary complexity.

---

# General Rules

Always write clean, production-ready code.

Never generate placeholder implementations unless explicitly requested.

Prefer readability over cleverness.

Avoid deeply nested code.

Keep files focused on a single responsibility.

---

# Technology Rules

Framework

Next.js 15 App Router

Language

TypeScript

Never use JavaScript.

---

Styling

Tailwind CSS v4

Never use inline styles.

Never use CSS Modules unless specifically requested.

---

Components

Use shadcn/ui whenever appropriate.

Create reusable components.

Never duplicate UI.

---

Animations

Use Framer Motion.

Animations should enhance UX.

Avoid excessive animations.

Respect reduced-motion preferences.

---

Icons

Use Lucide React.

Do not introduce additional icon libraries unless required.

---

State Management

Default:

React state

Context API (when appropriate)

Zustand (only for shared global state)

Avoid unnecessary global state.

---

Forms

React Hook Form

Validation with Zod

Never perform validation manually when Zod is appropriate.

---

Database

PostgreSQL

PostGIS

Drizzle ORM

Never introduce another ORM.

---

Authentication

Auth.js

No custom authentication implementation.

---

Maps

MapLibre GL JS

GeoJSON

PostGIS

Never depend on paid map providers.

---

Charts

Apache ECharts

Avoid unnecessary chart libraries.

---

# Project Structure

Every feature must follow this structure:

features/

    heritage/

    stories/

    research/

    ai/

    analytics/

Each feature owns:

components

hooks

services

types

utils

---

# Naming Conventions

Components

PascalCase

Example

HeritageCard.tsx

---

Hooks

camelCase

Example

useHeritageSearch.ts

---

Utilities

camelCase

Example

formatDistance.ts

---

Types

PascalCase

Example

HeritageSite.ts

---

Database

snake_case

Example

heritage_sites

---

API Routes

kebab-case

Example

/api/heritage-sites

---

# Component Rules

Every component must have:

Single responsibility

Typed props

Accessibility

Loading state

Error state (where applicable)

Responsive layout

Meaningful comments only when needed

Avoid large components (>300 lines)

Split complex components.

---

# API Rules

Use Route Handlers.

Validate every request.

Return consistent JSON.

Standard response:

{
  success: true,
  data: ...
}

Errors:

{
  success: false,
  error: ...
}

Never expose internal errors.

---

# Database Rules

Normalize data.

Use foreign keys.

Use indexes.

Use UUID primary keys.

Use timestamps.

Soft delete only where justified.

Store geometry in PostGIS.

---

# GIS Rules

Use EPSG:4326.

Support:

Point

LineString

Polygon

MultiPolygon

Always validate GeoJSON before storage.

Use spatial indexes.

Prefer PostGIS spatial queries.

---

# Accessibility

WCAG AA

Keyboard navigation

Visible focus

ARIA labels

Semantic HTML

44px minimum touch targets

---

# Performance

Code splitting

Lazy loading

Dynamic imports

Image optimization

Avoid unnecessary re-renders

Optimize map rendering

---

# Error Handling

Never fail silently.

Display user-friendly messages.

Log meaningful errors during development.

---

# Security

Validate all user input.

Escape output where required.

Protect API routes.

Do not expose secrets.

Never trust client input.

---

# Git Rules

One feature per commit.

Use conventional commits.

Examples:

feat:

fix:

refactor:

docs:

style:

test:

chore:

---

# Testing

Every feature should be manually tested before completion.

Critical workflows:

Search

Map

Authentication

AI Chat

Admin CRUD

---

# Documentation

Every major feature should update:

MASTER_ROADMAP.md

Relevant specification document

README (if setup changes)

---

# AI Rules

Before generating code:

Read:

PROJECT_CONTEXT.md

DEVELOPMENT_RULES.md

Relevant specification

Never assume missing requirements.

If information is missing, generate the simplest maintainable solution.

---

# Definition of Done

A feature is complete only if:

Database complete

API complete

Validation complete

Frontend complete

Responsive

Accessible

Tested

Documented

Git committed

---

# Guiding Principle

Build software that is easy to understand, easy to extend, and reliable enough to demonstrate the dissertation successfully.