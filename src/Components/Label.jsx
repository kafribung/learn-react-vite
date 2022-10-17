export default function Label(props) {
    return (
        <label className='block text-gray-700 text-sm font-bold mb-2' {...props}>
            {props.children || props.text}
        </label>
    )
}
