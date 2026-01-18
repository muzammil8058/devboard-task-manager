# DevBoard – Simple Java/Spring Web Task Manager

DevBoard is a small Java/Spring Boot web application that provides a simple Kanban-style task board
with three columns: **To-do**, **In Progress**, and **Done**. It was built as part of the IU
module *DLBCSPJWD01 – Java and Web Development*.

## Features

- Create tasks with title, description, priority and due date
- View tasks in three columns: To-do, In Progress and Done
- Change task status using buttons on each card
- Delete tasks that are no longer needed
- Responsive layout for desktop and smaller screens (narrow browser window)

---

## Requirements

- Java 17 or later installed
- Git (optional but recommended)
- Internet connection for the first Maven wrapper run (to download dependencies)

---

## Installation and Running the Application

### 1. Clone the repository

```bash
git clone https://github.com/muzammil8058/devboard-task-manager.git
cd devboard-task-manager

2. Run with Maven wrapper

On Windows (PowerShell or CMD):
mvnw.cmd spring-boot:run

On macOS / Linux:
./mvnw spring-boot:run

The first run may take a bit longer because Maven downloads the required dependencies.

When the application has started successfully, you should see a log line similar to:
Started DevboardApplication in X.XXX seconds

Using DevBoard

Open your browser and go to:

http://localhost:8080/

Fill in the form at the top:

Title (required)

Description

Priority (Low / Medium / High)

Due date

Click Add Task to create a new task.

Use the buttons on each task card to:

Move it to In Progress

Move it to Done

Delete it

The board updates immediately after each action without reloading the page.

Manual Test Cases

TC1 – Create task
Action: Fill all fields and click Add Task.
Expected: New card appears in the To-do column with the entered title, description, priority and due date.

TC2 – Move task To-do → In Progress → Done
Action: Click In Progress on a task, then Done.
Expected: Card moves from To-do to In Progress to Done.

TC3 – Delete task
Action: Click Delete on an existing task.
Expected: Card disappears from the board.

TC4 – Required title
Action: Try to add a task with an empty Title field.
Expected: Browser validation prevents submission, no new task is created.

TC5 – Responsive layout
Action: Make the browser window narrow (mobile width).
Expected: Layout adapts, all tasks and buttons remain visible without horizontal scrolling.

Technology Stack

Java 17

Spring Boot

Spring Web (REST controller)

Spring Data JPA

H2 in-memory database

HTML5, CSS3, vanilla JavaScript

Maven (via mvnw / mvnw.cmd)

License

This project was created for educational purposes as part of the IU module
DLBCSPJWD01 – Java and Web Development.


👉 Very important:

- **Do NOT** include the CSS snippet or the “CSS snippet (separate from README)” text in README.  
- The CSS you already added must stay only in `styles.css`.

---

## 2️⃣ Exact steps to fix it

1. In VS Code, open **README.md**.
2. Select **everything** (`Ctrl + A`) and delete.
3. Paste the cleaned markdown above.
4. Save the file (`Ctrl + S`).

Then in the terminal:

```bash
git add README.md
git commit -m "Clean up README formatting and structure"
git push origin main
