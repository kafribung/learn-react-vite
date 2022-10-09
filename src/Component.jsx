import React from 'react'

export default function Component() {
    return (
        <>
            <div className='grid place-content-center min-h-screen bg-slate-700'>
                <div className='flex gap-x-3'>
                    <Button>Sapi</Button>
                    <Button>Kuda</Button>
                </div>
            </div>
        </>
    )
}

function Button(props) {
    return (
        <button className='bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700 active:text-black'>
            {props.children}
        </button>
    )
}
