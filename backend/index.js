const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post('/add-task',async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload)
    console.log(createPayload)
    if(!parsePayload.success){
        res.status(404).json({
            msg : "You given the wrong input."
        })
        return
    }

    await todo.create({
        task: createPayload.task,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "TODO created successfully."
    })

})

app.get('/show-task', async (req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed', async (req,res) =>{
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload)
    console.log(updatePayload.id)
    if(!parsePayload.success){
        res.status(404).json({
            msg : "You given the wrong input."
        })
        return
    }
    await todo.updateOne({
        id: updatePayload.id
    },{
        completed: true
    })

    res.json({
        msg : "TODO marked as done."
    })
})

app.listen(3000);