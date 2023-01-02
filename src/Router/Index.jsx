import { createBrowserRouter } from "react-router-dom"

import Error from "../Errors/Index"
import App from "../App"
import Article from "../Article"
import Counting from "../Counting"
import Form from "../Form"
import Todo from "../Todo"
import UseRef from "../UseRef"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
    },

    {
        path: "articles",
        element: <Article />,
    },

    {
        path: "counting",
        element: <Counting />,
    },

    {
        path: "form",
        element: <Form />,
    },

    {
        path: "todo",
        element: <Todo />,
    },

    {
        path: "ref",
        element: <UseRef />,
    },
])

export default router
