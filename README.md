# BBISE Connect

A modern web portal front-end for the Balochistan Board of Intermediate and Secondary Education (BBISE), built with Vite, React, TypeScript, and shadcn/ui.

## Features

- **Home** – hero section, board statistics, announcements feed, and quick links
- **Results** – search results by roll number and exam type (SSC / HSSC) with a detailed marksheet view (currently uses mock data)
- **Downloads** – browsable categories for date sheets, roll number slips, admission forms, and circulars
- **Notifications** – board notices and updates
- **About & Contact** – board information and contact form

## Tech Stack

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) + Tailwind CSS
- React Router for navigation
- Vitest for unit tests, Playwright for end-to-end tests

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Run production build
npm run build

# Run unit tests
npm run test
```

## Project Structure

```
src/
  components/    # Reusable UI components and page sections
  components/ui # shadcn/ui primitives
  components/layout # Header, Footer, Layout, NoticeTicker
  pages/         # Route pages (Index, Results, Downloads, Notifications, About, Contact, NotFound)
  hooks/         # Shared React hooks
  lib/           # Utilities
```

## Notes

Result lookups currently display mock data and are not connected to an official BBISE API. This project is an independent front-end and is not affiliated with BBISE.
