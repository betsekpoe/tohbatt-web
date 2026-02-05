# TOHBATT Web

**Trust of Hope Building and Training Technology (TOHBATT)**
Providing world-class technical training and industrial construction services since 2013. Building legacies across Ghana and beyond.

This repository contains the source code for the TOHBATT official website, built with Next.js, Tailwind CSS, Sanity CMS, and Prisma (Postgresql).

## Features

-   **Modern UI/UX**: Built with Next.js App Router and Tailwind CSS.
-   **CMS Integration**: Content management for Stories/Posts using Sanity.io.
-   **Database**: PostgreSQL integration via Prisma ORM for handling inquiries and trainee data.
-   **Animations**: Smooth page transitions and element animations using Framer Motion.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.

## Project Structure

```bash
tohbatt-web/
├── app/                  # Next.js App Router pages and layouts
│   ├── projects/         # Projects showcase pages
│   ├── stories/          # Blog/News pages (fetched from Sanity)
│   ├── training/         # Training services pages
│   └── pglp/             # (Hidden for now.) Pacific Greenland Pond (Agribusiness) section
├── components/           # Reusable React components (Navbar, Hero, etc.)
├── lib/                  # Library/Utility functions (DB, Sanity client)
├── prisma/               # Database schema and configuration
├── sanity/               # Sanity Studio configuration and schemas
└── public/               # Static assets
```

## Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/)
-   **Language**: JavaScript
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **CMS**: [Sanity](https://www.sanity.io/)
-   **Database ORM**: [Prisma](https://www.prisma.io/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/betsekpoe/tohbatt-web.git
    cd tohbatt-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root directory. You will need the connection string for your database.
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/tohbatt_db?schema=public"
    ```
    *(Note: Sanity configuration is currently located in `lib/sanity.js`. Ensure you have access to the Sanity project `tam2yhf9` or update it to your own).*

4.  **Run Database Migrations:**
    Initialize the database schema using Prisma.
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management (Sanity)

This project uses Sanity for managing blog posts and stories. The schema definitions are located in `sanity/schemaTypes`.

To manage content, you can either:
-   Access the deployed Sanity Studio (if available).
-   Run the sanity studio locally (check the `sanity/` folder for specific scripts if a separate package.json exists there, otherwise managed via the main app if configured).

## License

[MIT](LICENSE)
