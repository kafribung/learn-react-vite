import React from 'react'
import clsx from 'clsx'

export default function Button(props) {
    const { text, children, color = 'bg-blue-600' } = props
    return (
        <button {...props} className={clsx(color, '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-1  px-4 py-2 rounded-md text-white hover:bg-blue-700 active:text-black')}>
            {text || children}
        </button>
    )
}
