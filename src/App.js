import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Task 1",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Task 2",
            day: "Feb 6th at 2:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "Task 3",
            day: "Feb 7th at 2:30pm",
            reminder: true,
        },
    ]);

    const addTask = (task) => {
        const id = tasks[tasks.length - 1].id + 1;
        console.log(id);
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
        console.log(id);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task))
        );
    };
    return (
        <div className="container">
            <Header />
            <AddTask onAdd={addTask} />
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        </div>
    );
}

export default App;
