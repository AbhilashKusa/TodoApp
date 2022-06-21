// Routes will contain the end points
const {
    Router
} = require('express');
const express = require('express');
const router = express.Router();
// import the methods to and add to end points
const {
    DeleteTod,
    PostCreateTodo,
    UpdateTodo,
    getAlltodo
} = require('../Controlers/todo');
router.get("/", getAlltodo);
router.put("/:id", UpdateTodo);
router.delete("/:id", DeleteTod);
router.post("/", PostCreateTodo);

module.exports = router;