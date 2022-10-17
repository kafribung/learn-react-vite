export default function Input({ ...props }) {
    return (
        <input
            className='transition duration-1000 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 foucs:outline-none focus:ring   focus:ring-blue-500/50 focus:border-blue-300 focus:shadow-outline mb-2'
            {...props}
            name={props.id}
        />
    )
}
