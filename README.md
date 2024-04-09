<h1 align="center">
  <a href="">
    <img src="./src/assets/banner.svg" alt="Project Banner Image">
  </a>
</h1>

# Todo - useContext Project

Replace this readme with your own information about your project.

Start by briefly describing the assignment in a sentence or two. Keep it short and to the point.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

This week we're practicing using global state with Context.
To do this we're building a To Do app.

- Your app should list all tasks - completed or uncompleted.
- You should be able to mark an uncompleted task as complete (and change it back to uncompleted).
- You should be able to add and remove tasks.
- Your app should show a count of either all tasks or all uncompleted tasks (or both).

Eveything went pretty smootly until I started with local storage. Something made it update one event too late. Then, instead it started resetting local at every reload. When it finally works, there are double logs in the console and I don't know why. Descided to leave it for now...

#### Next

- Styling
- Adding categories and projects
- Addind deadline
- I would like to create a kanban style board, with multiple statuses and labels. I doubt I will have time though...

### View it live

_Note for code review!_
If you mess up and want to restart: go to Dev tools -> Application -> Local storage -> delete To Do...

https://sofias-todo.netlify.app
[![Netlify Status](https://api.netlify.com/api/v1/badges/a6d922f6-3527-42a5-8c2e-842f55479e46/deploy-status)](https://app.netlify.com/sites/sofias-todo/deploys)

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
