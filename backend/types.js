const zod = require("zod");

const createTodo = zod.object({
    task : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}