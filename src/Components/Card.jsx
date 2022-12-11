import React from 'react'

function Card({ children }) {
    return <div className='bg-white tracking-normal shadow-md rounded'>{children}</div>
}

function Title({ children }) {
    return (
        <div className='border-b-4 border-slate-200 p-4'>
            <div className='text-lg'> {children}</div>
        </div>
    )
}

function Body({ children }) {
    return (
        <div className='bg-slate-50 p-4 leading-relaxed'>
            <div className='text-base'>{children}</div>
        </div>
    )
}

function Footer({ children }) {
    return (
        <div className='flex justify-end bg-slate-100 p-4'>
            <div className='text-sm'>{children}</div>
        </div>
    )
}

Card.Title = Title
Card.Body = Body
Card.Footer = Footer

export default Card
