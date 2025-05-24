import { useState } from "react";




export function CreateTodo(){
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("")
    return <div>

        <input style={{padding: 10, margin: 10}} 
                type="text" placeholder="Task" 
                onChange={function(e){
                const value = e.target.value;
                setTask(value)
        }}
        /> <br />

        <input style={{padding: 10, margin: 10}} 
                type="text" placeholder="Desription" 
                onChange={function(e){
                const value = e.target.value;
                setDescription(value)
        }}
        /> <br />
        <button 
        style={{padding: 10, margin: 10}} 
        onClick={() =>{
            fetch("http://localhost:3000/add-task",{
                method: "POST",
                body: JSON.stringify({
                    task : task,
                    description: description
                }),
                headers: {
                    "Content-Type" : "application/json"
                }

            })
                .then(async function (res){
                    const json = await res.json();
                    alert("Todo Created");
                })
        }}
        >Add a Todo</button>
    </div>
    
}
