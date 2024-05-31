const express = require('express');
const app = express();
const todoListRoutes = require('./routes/todolist.js')

app.use('/todo-list',todoListRoutes)

app.listen(8000,() => {
    console.log("server listening on port 8000")
});