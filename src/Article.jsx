import React from 'react'
import Button from './Components/Button'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

export default function Article() {
    return (
        <>
            <Navbar />
            <div className=' p-4 bg-slate-600 min-h-screen'>
                <Card>
                    <Card.Title>Title</Card.Title>
                    <Card.Body>
                        A pathname to redirect from. Any valid URL path that path-to-regexp@^1.7.0 understands. All matched URL parameters are provided to the pattern in to. Must contain all
                        parameters that are used in to. Additional parameters not used by to are ignored.
                    </Card.Body>
                    <Card.Footer>
                        <Button>View</Button>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}
