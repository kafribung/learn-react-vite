import Button from './Components/Button'
import Card from './Components/Card'
import Input from './Components/Input'
import Label from './Components/Label'
import Navbar from './Components/Navbar'

export default function Todo() {
    return (
        <>
            <Navbar />

            <div className='grid place-content-center bg-slate-600 min-h-screen'>
                <div className='w-96 max-w-xl'>
                    <Card>
                        <Card.Title>Todos</Card.Title>
                        <Card.Body>
                            <Label htmlFor={'todo'} text={'Todo'} />
                            <div className='flex'>
                                <Input id={'todo'} name={'todo'} />
                                <Button text={'Add'} />
                            </div>
                        </Card.Body>
                        <Card.Footer></Card.Footer>
                    </Card>
                </div>
            </div>
        </>
    )
}
