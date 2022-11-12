import { createBrowserRouter } from 'react-router-dom'

import Error from '../Errors/Index'
import App from '../App'
import Article from '../Article'
import Counting from '../Counting'
import Form from '../Form'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
    },

    {
        path: 'articles',
        element: <Article />,
    },

    {
        path: 'counting',
        element: <Counting />,
    },

    {
        path: 'form',
        element: <Form />,
    },
])

export default router
