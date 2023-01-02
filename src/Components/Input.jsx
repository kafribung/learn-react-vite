// ~~~~~Jika menggunakan forwardRef
// import { forwardRef } from "react"

import { useCallback, useEffect, useRef } from "react"

// const Input = forwardRef(({ ...props }, ref) => {
//     return (
//         <input
//             ref={ref}
//             className='transition duration-700 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none foucs:outline-none focus:ring focus:ring-blue-500/50 focus:shadow-outline mb-2'
//             {...props}
//             name={props.id}
//         />
//     )
// })

// ~~~~~ Menggunakan useRef
const Input = ({ isFocused = false, ...props }) => {
    const inputRef = useRef(null)

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus()
        }
    })
    return (
        <input
            ref={inputRef}
            className='transition duration-700 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none foucs:outline-none focus:ring focus:ring-blue-500/50 focus:shadow-outline mb-2'
            {...props}
            name={props.id}
        />
    )
}

// ~~~~~ Menggunakan useCallback
// const Input = ({ isFocused = false, ...props }) => {
//     const inputRef = useCallback((e) => {
//         if (isFocused) {
//             e.focus()
//         }
//     }, [])

//     return (
//         <input
//             ref={inputRef}
//             className='transition duration-700 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none foucs:outline-none focus:ring focus:ring-blue-500/50 focus:shadow-outline mb-2'
//             {...props}
//             name={props.id}
//         />
//     )
// }

export default Input

// export default function Input({ ...props }) {
//     return (
//         <input
//             className='transition duration-700 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 outline-none foucs:outline-none focus:ring focus:ring-blue-500/50 focus:shadow-outline mb-2'
//             {...props}
//             name={props.id}
//         />
//     )
// }
