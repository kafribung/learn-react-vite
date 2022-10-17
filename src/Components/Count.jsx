import { useState } from 'react'
import Button from './Button'

export default function Count({ value }) {
    const [count, setCount] = useState(value)

    function handlerClick() {
        let newCount = count + 1
        setCount(count + 1)
        console.log(count, newCount)
    }

    function handlerClick2() {
        setCount((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <h1 className='text-2xl'>{count}</h1>
            <div className='flex border-b-2 mb-3'>
                {/* Langsung mengubah data dari variabel count */}
                <Button color='bg-indigo-700' onClick={handlerClick}>
                    Count
                </Button>
                {/* <Button color='bg-indigo-700' onClick={handlerClick2}>
                    Count
                </Button> */}
            </div>

            <div className='flex'>
                {/* Data yang didapat dari var count, di olah terlebih dahulu */}
                <Button
                    color='bg-indigo-700'
                    onClick={() => {
                        handlerClick2()
                        handlerClick2()
                        handlerClick2()
                    }}>
                    Count+3
                </Button>
            </div>
        </div>
    )
}
