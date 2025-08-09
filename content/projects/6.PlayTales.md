---
title: "PlayTales"
description: A full-stack ecommerce store for purchasing story-driven games
tags:
  - React
  - Tailwind CSS
  - TypeScript
  - Node
  - Postgres
  - Docker
live_url: "https://playtales.minch.dev/"
source_url: "https://github.com/oneminch/PlayTales"
image: "https://raw.githubusercontent.com/oneminch/PlayTales/main/frontend/public/screenshot.png"
icon: "https://raw.githubusercontent.com/oneminch/PlayTales/main/frontend/public/logo.svg"
---

## What is PlayTales?

PlayTales is a full-stack ecommerce store for purchasing story-driven games.

## Why Did You Build It?

I built this project to better understand modern full-stack systems. I wanted to demonstrate my ability to design and implement a web application from end to end by following modern best practices. It required a strong understanding of various programming languages, frameworks, and tools, as well as the ability to integrate them seamlessly.

A short list of some of the concepts and patterns I have implemented:

- Pagination (UI & API)
- Token-based Authentication (JWTs)
- Secure User Session Management (Cookies)
- Data Modelling (Postgres + Prisma ORM)
- Complex State Management using React's Context API
- Queries and Mutations (React Query)
- Containerization (Docker)

My goal is to use this project idea as a basis to build on when learning new things. For example, to learn Vue, I can rewrite the frontend in Vue while keeping the Node backend; to learn Spring in depth, I can rewrite the backend in Spring while keeping the existing frontend and so on. I have already used it to learn Docker by containerizing the project to be deployable anywhere.

## How Did You Build It?

I chose React and Tailwind CSS to build a dynamic UI. I implemented a backend using the MVC architecture in Node.js and Express.js to create API endpoints that handle different tasks such as product fetching, searching and user authentication. Furthermore, Using Prisma ORM, I designed a Postgres database schema and used its client in the different endpoints to build type-safe queries. I also implemented an authentication system using JSON Web Tokens (JWTs) and cookies.

I used other libraries from the React ecosystem for client-side actions that improve the user experience: React Router for routing & React Query for data fetching.

## What Tools Did You Use?

- **Frontend**: `React`, `TypeScript`, `Tailwind CSS`, `React Router`, `React Query`
- **Backend**: `Node`, `Express`, `Postgres`, `Prisma`
- **Deployment**: `Vercel`, `Render`, `Docker`
