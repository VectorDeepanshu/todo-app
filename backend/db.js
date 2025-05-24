const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:d2e0e0p4@cluster0.ilnw4gc.mongodb.net/")

const todoSchema = mongoose.Schema({
    task : String,
    description : String,
    completed : Boolean 
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {todo};