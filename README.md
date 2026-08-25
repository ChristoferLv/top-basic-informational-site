# Basic Informational Site

A small Express site created as part of [The Odin Project Node.js](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs) course. It serves a few static HTML pages and demonstrates basic routing with a custom 404 page.

## Objective

The goal of this project was to practice:
- Setting up a simple Express server
- Serving static HTML files from different routes
- Handling a fallback 404 response
- Organizing a tiny site into separate pages

## What is it?

A minimal informational website with:
- A home page
- An about page
- A contact page
- A custom 404 page for unknown routes

## How to Use

1. Open the project folder.
2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

4. Open the browser at `http://localhost:3000`.

## Features

- **Route-based navigation**: `/`, `/about`, and `/contact-me`
- **Static file serving**: each page is stored as a separate HTML file
- **Custom 404 page**: unknown routes return a dedicated fallback page
- **Simple Express setup**: a lightweight introduction to server-side routing

## Project Structure

- `index.js`: Express server and route definitions
- `index.html`: home page
- `about.html`: about page
- `contact-me.html`: contact page
- `404.html`: fallback page for invalid routes

## Technologies Used

- Node.js
- Express
- HTML5

## Visualization

<img width="1910" height="915" alt="basic_informational_screenshot" src="https://github.com/user-attachments/assets/812bea7a-baf7-458d-adf1-a533de24eb10" />

---

Project developed following: [The Odin Project - Basic Informational Site](https://www.theodinproject.com/lessons/nodejs-basic-informational-site)

📍 **Main repository with all projects**: [ChristoferLv/TheOdinProject](https://github.com/ChristoferLv/TheOdinProject)
