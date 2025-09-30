# Vafra Falcon - Premium PVC Windows & Glass Solutions

## Project Overview

Leading manufacturer of premium PVC profiles and modern glass units in Uzbekistan. Full production cycle with ISO certified quality.

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd vafra-falcon

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts
├── assets/         # Images and static assets
└── main.tsx        # Application entry point
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## Development

### Code Style

This project uses ESLint for code quality. Run linting with:

```sh
npm run lint
```

### Environment

- Development server runs on `http://localhost:8080`
- Supports hot module replacement (HMR)