import { useState } from "react"
import Button from "./Components/Button"
import Input from "./Components/Input"
import Label from "./Components/Label"
import Navbar from "./Components/Navbar"

export default function Form() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    function onChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Navbar />

            <div className='grid place-content-center bg-slate-600 min-h-screen'>
                <form className='bg-white rounded-lg shadow-lg p-10 max-w-screen-2xl w-96'>
                    <div className='mb-2 bg-gray-100 border border-double border-blue-500 rounded-sm text-sm'>
                        <div>Email: {form.email || "------"}</div>
                        <div>Password: {form.password || "------"}</div>
                    </div>
                    {/* Jika tidak menggunakan fungsi onChange */}
                    {/* <div>
                        <Label htmlFor={'email'} text={'Email'} />
                        <Input id={'email'} type={'text'} placeholder={'Email'} onChange={(e) => setForm({ email: e.target.value })} />
                    </div> */}
                    <div>
                        <Label htmlFor={"email"} text={"Email"} />
                        <Input id={"email"} type={"text"} placeholder={"Email"} onChange={onChange} />
                    </div>

                    <div>
                        <Label htmlFor={"password"} text={"Password"} />
                        <Input id={"password"} type={"password"} placeholder={"Password"} value={form.password} onChange={onChange} />
                    </div>
                    <div className='flex mt-2 justify-end'>
                        <Button type='submit'>Login</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
