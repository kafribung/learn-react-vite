import Button from "./Components/Button"
import Card from "./Components/Card"
import Input from "./Components/Input"
import Label from "./Components/Label"
import Navbar from "./Components/Navbar"
import { useRef } from "react"

export default function UseRef() {
    const inputRef = useRef(null)
    function focus(e) {
        e.preventDefault()
        inputRef.current.focus()
    }

    const countRef = useRef(0)
    function render() {
        countRef.current = countRef.current + 1
        console.log(countRef.current)
    }

    return (
        <>
            <Navbar />

            <div className='grid place-content-center bg-slate-600 min-h-screen'>
                <div className='w-96'>
                    <Card>
                        <Card.Title>UseRef Hook</Card.Title>
                        <Card.Body>
                            <form>
                                {/* Autofocus */}
                                <Label htmlFor={"new-task"} text={"Email"} />
                                <div className='flex items-center gap-x-2'>
                                    {/* Ketika menggunakan component, ref harus didefinisikan menggunakan React.forwardRef() */}
                                    {/* <Input className='border-gray-100 rounded-sm' id={"new-task"} ref={inputRef} /> */}
                                    {/* Akan berfungsi jika tidak menggunakan element */}
                                    {/* <input className='border-gray-100 rounded-sm' id={"new-task"} ref={inputRef} /> */}
                                    {/* <Button text={"Focus"} onClick={focus} /> */}
                                    <Input id={"new-task"} isFocused />
                                </div>
                                <Label htmlFor={"password"} text={"Password"} />
                                <div className='flex items-center gap-x-2'>
                                    <Input type='password' id={"password"} />
                                </div>
                            </form>
                        </Card.Body>
                        <Card.Footer>
                            {/* UseRef tidak merender ulang komponen, lihat di console log */}
                            <div className='flex mt-2 justify-between'>
                                <Button text={"Tidak merender"} onClick={render} />
                                <p>Items {countRef.current}</p>
                            </div>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}
