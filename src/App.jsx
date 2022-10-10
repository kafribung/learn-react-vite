import React from 'react'
import { Login as LoginIcon } from 'tabler-icons-react'
import { Logout as LogoutIcon } from 'tabler-icons-react'
import { Registered as RegisteredIcon } from 'tabler-icons-react'
import Button from './Components/Button'
import Navbar from './Components/Navbar'

export default function App() {
    const tyoe = 'button'
    return (
        <>
            <Navbar />
            <div className='grid place-content-center min-h-screen bg-slate-700'>
                <div className='flex gap-x-3'>
                    {/* Cara 1, Tidak di rekomendasi */}
                    <Button
                        onClick={() => console.log('login.')}
                        type='button'
                        color='bg-pink-600'
                        text={
                            <>
                                {/* <Login className='w-5 h-5 stroke-2' /> */}
                                <LoginIcon />
                                Login
                            </>
                        }></Button>

                    {/* Cara 2, Di rekomendasi */}
                    <Button
                        {...{
                            type: tyoe,
                            color: 'bg-orange-600',
                            onClick: () => console.log('Register.'),
                        }}>
                        <RegisteredIcon />
                        Register
                    </Button>

                    {/* Cara 3, Menggunakan Children, di rekomendasikan */}
                    <Button onClick={() => console.log('logout.')} type='submit'>
                        <LogoutIcon />
                        Logout
                    </Button>

                    <Button>Kuda</Button>
                </div>
            </div>
        </>
    )
}

// function Button(props) {
//     const { text, children, color = 'bg-blue-600' } = props
//     return (
//         <button {...props} className={`${color} [&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-1  px-4 py-2 rounded-md text-white hover:bg-blue-700 active:text-black`}>
//             {text || children}
//         </button>
//     )
// }
