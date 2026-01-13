Personal Blog Website

A simple React-based personal blog website built with Vite. This project demonstrates React components, props, and modern development practices.

Features

 -Header component displaying the blog name
-About section with an image and description
-Article list displaying blog posts
-Reusable Article component for each post

Project Structure


src/
├── components/
│   ├── App.jsx          # Main app component
│   ├── Header.jsx       # Header component with blog name
│   ├── About.jsx        # About section with image and description
│   ├── ArticleList.jsx  # Lists all articles from data
│   └── Article.jsx      # Individual article component
├── data/
│   └── blog.js          # Blog data (name, image, about text, posts)
├── __tests__/           # Test files
└── assets/              # Static assets

Getting Started

Prerequisites
-Node.js (version 14 or higher recommended)
-npm or yarn

Installation
1.Clone the repository (or navigate to the project directory):
   cd react-components-props-vite-lab

2.Install dependencies:
   npm install

Running the Development Server
Start the development server:
npm run dev

The application will be available at http://localhost:5173 (or the port shown in your terminal).

Building for Production
Build the application for production:
npm run build

The output will be in the `dist` directory.

Preview Production Build
Preview the production build locally:
npm run preview

Running Tests
Run the test suite:
npm test

Run tests in watch mode:
npm test -- --watch

Linting
Check for linting errors:
npm run lint

Technologies Used

- React 18 - UI library
- Vite - Build tool and dev server
- ESLint - Code linting
- Vitest - Testing framework
- Testing Library - React testing utilities

Screenshots

Main Blog Page
![Blog Demo](images/demo.png)

Learning Outcomes

This project demonstrates:
- React component composition
- Props passing between components
- Default prop values
- Array mapping for dynamic content
- Component-based architecture

