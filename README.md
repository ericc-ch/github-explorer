# GitHub Repositories Explorer

A simple yet robust web application built with React and TypeScript that allows you to search for GitHub users and explore their public repositories. This project was developed as a technical assessment to showcase modern frontend development practices.

## Project Rationale & Architectural Decisions

This project, while seemingly simple, was approached with a mindset geared towards scalability and maintainability, similar to a real-world application.

### Why I Over-engineered

To sort of simulate a real-world scenario, applications need to be robust, scalable, and easy to maintain. Using a libraries, for example TanStack Query can simplifies data fetching. Tailwind can simplifies styling.

This prepares for future growth and complexity.

### Why limiting repo list to 10 per call

The GitHub API has rate limits for unauthenticated requests. A naive implementation might fetch all repositories for a user at once, which could easily lead to `429 Too Many Requests` errors, especially for users with many repositories.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)

### Installation

Install dependencies:

```sh
bun install
```

### Running the Application

To start the development server, run:

```sh
bun run dev
```

## Available Scripts

In the project directory, you can run:

- `bun run dev`: Runs the app in development mode.
- `bun run build`: Builds the app for production to the `dist` folder.
- `bun run lint`: Lints the codebase using ESLint.
- `bun run preview`: Serves the production build locally.
- `bun run test`: Runs the test suite.
