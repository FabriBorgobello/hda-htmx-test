# HDA Application

## Overview

This application is a straightforward Node.js API that adheres to the [Hypermedia-Driven Application (HDA) pattern](https://htmx.org/essays/hypermedia-driven-applications/).

It demonstrates how to perform CRUD operations using this architecture. The API leverages [Hono](https://hono.dev/) for its capability to serve JSX directly from the server and [HTMX](https://htmx.org/) to enable the creation of server-driven web applications.

The main goal is to showcase the feasibility of building web applications with minimal or no client-side JavaScript, emphasizing server-driven development.

## Getting Started

To get started with this application, follow these steps:

1. Install the necessary packages using `npm install`.
2. Start the development server using `npm run dev`.
3. Access the application in your web browser: [http://localhost:3000](http://localhost:3000).

> NOTES:
> This application **DOES NOT** use React, Vue, or any other client-side JavaScript framework.
> This application **DOES NOT** have a database. It uses an in-memory data store.
