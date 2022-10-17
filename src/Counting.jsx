import React, { useState } from 'react'
import Button from './Components/Button'
import Count from './Components/Count'
import Navbar from './Components/Navbar'

export default function Counting() {
    return (
        <>
            <Navbar />

            <div className='grid place-content-center bg-slate-600 min-h-screen text-center'>
                <Count value={30} />
            </div>
        </>
    )
}
