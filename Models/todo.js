// this file will contain mongodb schema 

const mongoose = require('mongoose');

// Todo Schema

const Todoschema = new mongoose.Schema({
    title: {
        type: "string",
        require: true
    },
    description: {
        type: "string"
    }

})
const Todo = mongoose.model("todo", Todoschema);
module.exports = Todo;