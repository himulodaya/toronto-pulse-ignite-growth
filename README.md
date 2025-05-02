# webrewery.io Project

This project is a web application, likely a landing page or marketing site, built using modern frontend technologies.

## Technologies Used

This project leverages the following core technologies:

* **Framework**: React
* **Build Tool**: Vite
* **Language**: TypeScript
* **UI Components**: shadcn/ui
* **Styling**: Tailwind CSS

Key dependencies include:
* `react`, `react-dom`
* `react-router-dom` for routing
* `tailwindcss`, `postcss`, `autoprefixer` for styling
* Various `@radix-ui/*` packages for accessible UI primitives
* `lucide-react` for icons
* `class-variance-authority`, `clsx`, `tailwind-merge` for utility functions
* `three`, `threejs-toys` for potential 3D/visual effects (as seen in HeroSection)
* `sonner`, `@tanstack/react-query` for notifications and data fetching/state management

## Getting Started

To run this project locally, ensure you have Node.js and npm (or yarn) installed.

1.  **Clone the repository:**
    ```sh
    # Replace with your actual repository URL
    git clone <YOUR_GIT_REPOSITORY_URL>
    cd webrewery.io
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```
    *(This command installs all the necessary packages listed in `package.json`)*

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    *(This command starts the Vite development server, typically available at `http://localhost:8080`)*

## Available Scripts

* `npm run dev`: Starts the development server with hot reloading.
* `npm run build`: Creates an optimized production build in the `dist/` directory.
* `npm run lint`: Runs the ESLint linter to check code quality.
* `npm run preview`: Serves the production build locally for previewing.

## Project Structure Overview

* **`public/`**: Contains static assets (`robots.txt`, `_headers`, `_redirects`) that are copied directly to the build output directory.
* **`src/`**: Contains the core application source code.
    * **`components/`**: Reusable React components.
        * **`ui/`**: UI primitives based on shadcn/ui (Button, Card, Dialog, etc.).
        * Feature-specific components (e.g., `HeroSection.tsx`, `BenefitsSection.tsx`, `Footer.tsx`).
    * **`hooks/`**: Custom React hooks (e.g., `use-mobile.tsx`, `use-toast.ts`).
    * **`lib/`**: Utility functions (e.g., `utils.ts` containing `cn`).
    * **`pages/`**: Page-level components mapped to application routes (e.g., `Index.tsx`, `NotFound.tsx`).
    * **`App.tsx`**: The main application component, setting up routing (`react-router-dom`) and context providers (QueryClientProvider, TooltipProvider, Toasters).
    * **`main.tsx`**: The application entry point that renders the root `App` component into the DOM.
    * **`index.css`**: Global styles, Tailwind CSS directives, and custom CSS classes/variables.
* **`index.html`**: The HTML template file used by Vite.
* **`package.json`**: Project metadata, dependencies, and scripts.
* **`vite.config.ts`**: Configuration for the Vite build tool.
* **`tailwind.config.ts`**: Configuration for Tailwind CSS.
* **`tsconfig.*.json`**: TypeScript configuration files for the app and Node.js environment.
* **`postcss.config.js`**: Configuration for PostCSS (used with Tailwind).
* **`eslint.config.js`**: Configuration for ESLint.
* **`Dockerfile`**: Defines steps to build a Docker container for deploying the application using Node.js for the build stage and Nginx for serving.
* **`components.json`**: Configuration file for shadcn/ui CLI.

## Deployment

This project includes a `Dockerfile` which can be used to build a container image for deployment. The Dockerfile sets up a multi-stage build using Node.js to build the static assets and Nginx to serve them.

*(You can add more specific instructions here based on your chosen hosting provider or deployment workflow, e.g., Netlify, Vercel, AWS, Google Cloud, etc.)*
