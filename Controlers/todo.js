// This will have Methods to controll the Endpoints
const Todo = require('../Models/todo');
// Read all the todos
exports.getAlltodo = (req, res) => {

    Todo.find().then((todo) => res.json(todo))
        .catch(
            (err) => {
                res.status(404).json({
                    message: "Todo not found",
                    error: err.message
                })
            }
        )
}
// Create a new todo
exports.PostCreateTodo = (req, res) => {
    Todo.create(req.body).then(((data) => {
        res.json({
            message: "sucess data stored"
        }).catch((err) => res.status(404).json({
            message: "datafailed",
            error: err.message
        }))
    }))

};
// Update Todo 
exports.UpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.json({
            message: "sucessfully updated",
            data
        }).catch((err) => {
            res.status(400).json({
                message: "Failed to Update",
                error: err.message
            })
        })
    })
}
// 
// Delete Todo
exports.DeleteTod = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body).then((data) => {
        res.json({
            message: "sucessfully updated",
            data
        }).catch((err) => {
            res.status(400).json({
                message: "Failed to Update",
                error: err.message
            })
        })
    })
}