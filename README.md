# Frontend Assessment

> A small Next.js + TypeScript frontend exercise demonstrating task management features and best practices.

---

## Overview ✅

This repository contains a small Next.js (React) frontend application written in TypeScript. It serves as a frontend assessment project and demonstrates:

- A modular Next.js 13+ app directory structure
- TypeScript-first components and styles (CSS-in-JS / styled components approach)
- Simple Redux-based state management for tasks
- A minimal API route for task CRUD operations (for dev/testing)
- Accessible and responsive UI components (Task cards, Search, Modals, Navigation)

The app is intended to be run locally for development and evaluation. It focuses on clean code structure, testability, and clarity rather than advanced production concerns.

---

## Guide to installation 💾

Follow these steps to install dependencies and run the app locally.

1. Clone the repository:

```bash
git clone https://github.com/andrewmoquia/frontend-assessment.git
cd frontend-assessment
```

2. Install dependencies (using npm):

```bash
npm install
```

You can also use `yarn` or `pnpm` if you prefer:

```bash
# yarn
yarn

# pnpm
pnpm install
```

3. Start the development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser to view the app.

---

## Setup of environment (env) ⚙️

This project uses a small number of environment variables for local development. Create a `.env` file in the project root and add the necessary values to run the setup. Use the values provided below:

```
DATABASE_URL=postgresql://postgres.izlbgxvhthoeckncifks:rj4ZManGNzdRTgs1@aws-1-ap-south-1.pooler.supabase.com:5432/postgres
```

Notes:

- The `DATABASE_URL` is set, the app will connect to the specified PostgreSQL database and persist tasks there (see `lib/db.ts` and `src/app/api/task/route.ts`).

---

## Project structure 🔧

Highlights of the main folders and files:

- `src/app/` - Next.js app routes, layout, and providers
- `src/components/` - Reusable presentational components and styles
- `src/redux/` - Redux store and slices for task state
- `src/api/task/` - API route handling basic task operations
- `lib/` - Utility code such as API helpers and a simple DB layer

---

## Development tips 💡

- Use the `npm run lint` scripts to check and fix code style.

---
