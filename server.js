const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML and CSS)
//app.use(express.static(path.join(__dirname, "public")));

// Task storage (in-memory array for simplicity)
let tasks = [];

// Home route

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "taskManager", "cac.html"));
    app.use("/", express.static(path.join(__dirname, "/public/taskManager/")));
});

app.get("/home", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "home", "home.html"));
    app.use("/home", express.static(path.join(__dirname, "/public/home/")));
})


// Add task route
app.post("/addTask", (req, res) => {
    const newTask = {
        title: req.body.title,
        completed: false,
    };  
    tasks.push(newTask);
    res.json(tasks);
});

// Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
