// will contain required code for connecting database

const {
    default: mongoose
} = require("mongoose");

const Mongoose = require('mongoose');

// Contect to Db
const db = process.env.Mongo_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database Connected');
    } catch (err) {
        console.log(err.messsage);
        process.exit(1);
    }

}
module.exports = connectDB;