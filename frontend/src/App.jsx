import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

useEffect(() => {
    fetch("http://localhost:3000/show-task")
      .then(async function (res) {
        const json = await res.json();  // don't forget await!
        setTodos(json.todos);
      });
  }, [todos]);

  return (
      <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
      </div>
  )
}

export default App
