# Task Management API 🚀

Welcome! 👋

This project is part of a hands-on backend development tutorial where we build a simple Task Management API using **Node.js, Express, and JavaScript**.

We'll learn how to create, view, update, complete, and delete tasks using an in-memory array, without setting up a database.

## What We're Building

* `POST /tasks` , Create a task
* `GET /tasks` , View all tasks
* `GET /tasks/:id` , View a single task
* `PUT /tasks/:id` , Update a task
* `PATCH /tasks/:id/:completed` , Mark a task as completed or incomplete
* `DELETE /tasks/:id` , Delete a task

## Getting Started

1. Clone this repository.

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   node server.js
   ```

4. Test the endpoints using Postman or Thunder Client.

The server runs at `http://localhost:4000`.

**Note:** This is a tutorial project. Tasks are stored in memory, so they disappear when the server restarts.

Happy coding! 💻
