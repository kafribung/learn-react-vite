import { useState } from "react"
import clsx from "clsx"
import Button from "./Components/Button"
import Card from "./Components/Card"
import Input from "./Components/Input"
import Label from "./Components/Label"
import Navbar from "./Components/Navbar"
import { Check, CircleMinus, Trash } from "tabler-icons-react"

export default function Todo() {
    const [tasks, setTasks] = useState([])

    const [newTask, setNewTask] = useState("")

    function addTask(e) {
        e.preventDefault()

        setTasks((preventNewTask) => [
            ...preventNewTask,
            {
                id: Math.floor(Math.random() * Date.now()),
                name: newTask,
                completed: false,
            },
        ])
        setNewTask("")
    }

    function handlerCompleted(id) {
        setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
    }

    function handlerRemove(id) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
    }

    return (
        <>
            <Navbar />

            <div className='grid place-content-center bg-slate-600 min-h-screen'>
                <div className='w-96'>
                    <Card>
                        <Card.Title>Todos</Card.Title>
                        <Card.Body>
                            <Label htmlFor={"new-task"} text={"Task"} />
                            <form>
                                <div className='flex items-center gap-x-2'>
                                    <Input id={"new-task"} value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                                    <Button text={"Add"} onClick={addTask} />
                                </div>
                            </form>

                            <div className='mt-2'>
                                {tasks.length > 0 ? (
                                    <ol type='disk'>
                                        {tasks.map((task) => (
                                            <li key={task.id} className='flex items-center justify-between'>
                                                <div>
                                                    {task.name}
                                                    {task.completed ? (
                                                        <span className='text-xs p-1 rounded-md bg-green-200'>Selesai</span>
                                                    ) : (
                                                        <span className='text-xs p-1 rounded-md bg-red-200 '>Belum Selesai</span>
                                                    )}
                                                </div>

                                                {/* Button completed and remove item */}
                                                <div className='mt-2'>
                                                    {/* Completed */}
                                                    <button
                                                        onClick={() => handlerCompleted(task.id)}
                                                        className={clsx(
                                                            !task.completed ? "bg-green-300 hover:bg-green-500" : "bg-orange-300 hover:bg-orange-500",
                                                            " py-1 px-2 w-full rounded-md max-w-lg text-sm whitespace-nowrap shadow-sm "
                                                        )}>
                                                        {/* Icon */}
                                                        {!task.completed ? <Check size={20} strokeWidth={1} color={"white"} /> : <CircleMinus size={20} strokeWidth={2} color={"white"} />}
                                                    </button>

                                                    {/* Remove */}
                                                    <button
                                                        onClick={() => handlerRemove(task.id)}
                                                        className={"bg-red-300 hover:bg-red-500 py-1 px-2 w-full rounded-md max-w-lg text-sm whitespace-nowrap shadow-sm"}>
                                                        {/* Icon */}
                                                        <Trash size={20} strokeWidth={2} color={"white"} />
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    "No todos"
                                )}
                            </div>
                        </Card.Body>
                        <Card.Footer>You have {tasks.length} todos</Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}
