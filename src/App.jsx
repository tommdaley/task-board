import { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])

  function handleAddTask(text) {
    setTasks((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  function handleToggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <main className="task-board">
      <h1>タスクボード</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
        onDelete={handleDeleteTask}
      />
    </main>
  )
}

export default App
