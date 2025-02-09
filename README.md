# Pet Adoption App

A Next.js application that helps users browse and favorite adoptable dogs using the Fetch API.

## Project Overview

This application allows users to:

- Search and filter available dogs
- View detailed information about each dog
- Add dogs to favorites
- Match with potential dogs for adoption

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   ├── dashboard/      # Main application pages
│   │   ├── favorites/  # Favorited dogs page
│   │   └── match/      # Dog matching page
│   ├── api/           # API route handlers
│   └── page.tsx       # Home page
├── public/           # Static assets
└── types/           # TypeScript type definitions
```
