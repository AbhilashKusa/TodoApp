const express = require('express');
const cors = require('cors');

require('dotenv').config();
const app = express();
const connectDB = require('./Config/db');
const todo = require('./Routes/todo')
// Initilize the middleware
app.use(express.json({
    extended: false
}));
app.use("/api/todo", todo);
// cors
app.use(cors({
    origin: true,
    credentials: true
}))
// connect to Db
connectDB();
app.get("/", (req, res) => res.send("server is up and running"));
// Set up the port
const Port = process.env.Port || 8000;
app.listen(Port, () => {
    console.log(`Server is running ${Port}`);
})

// 