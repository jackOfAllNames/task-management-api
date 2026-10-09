const express = require('express');

const PORT = 4000;
const app = express();

// POST, GET, PUT, PATCH, DELETE
app.use(express.json());

const tasks = [];

app.post("/tasks", (req, res) => {
    const {title, description} = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    }

    tasks.push(newTask);
    
    res.status(201).json({
        status: "success",
        message: newTask
    })
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
})

app.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find((task) => task.id === id);
    
    if (!task) {
        return res.status(404).json({
            status: "fail",
            message: `Task with ${id} not found`
        })
    }
    
    res.json({
        status: "success",
        message: task
    })
})

app.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find((task) => task.id === id);
    if (!task) {
        return res.status(404).json({
            status: "success",
            message: `Task with ${id} not found`
        })
    }

    const {title, description} = req.body;

    task.title = title;
    task.description = description;

    res.json({
        status: "success",
        message: task
    })
})

app.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({
            status: "success",
            message: `Task with the id ${id} not found`
        })
    }
    const deleteTask = tasks.splice(taskIndex, 1);

    res.json({
        status: "success",
        message: `Task with id ${id} successfully deleted`,
        task: deleteTask[0]
    })
})

app.patch("/tasks/:id/:completed", (req, res) => {
    const id = Number(req.params.id);
    const completed = req.params.completed === "true";

    const task = tasks.find((task) => task.id === id);
    if (!task) {
        return res.status(404).json({
            status: "success",
            message: `Task with the id ${id} not found`
        })
    }
    task.completed = completed;

    res.json(task);

})

app.listen(PORT, () => {
    console.log(`Server is currently running on localhost, port = ${PORT}`);
})
