import React from 'react'
import Navbar from './Components/Navbar'

export default function Article() {
    return (
        <>
            <Navbar />
            <div className='bg-slate-600 min-h-screen'>
                <div className='w-full max-w-sm p-4'>
                    <div className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
                        <li className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow'>
                            <div className='flex flex-1 flex-col p-8'>
                                <img
                                    className='mx-auto h-32 w-32 flex-shrink-0 rounded-full'
                                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
                                    alt=''
                                />
                                <h3 className='mt-6 text-sm font-medium text-gray-900'>Jane Cooper</h3>
                                <dl className='mt-1 flex flex-grow flex-col justify-between'>
                                    <dt className='sr-only'>Title</dt>
                                    <dd className='text-sm text-gray-500'>Paradigm Representative</dd>
                                    <dt className='sr-only'>Role</dt>
                                    <dd className='mt-3'>
                                        <span className='rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800'>Admin</span>
                                    </dd>
                                </dl>
                            </div>
                            <div>
                                <div className='-mt-px flex divide-x divide-gray-200'>
                                    <div className='flex w-0 flex-1'>
                                        <a
                                            href='mailto:janecooper@example.com'
                                            className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500'>
                                            {/* Heroicon name: mini/envelope */}
                                            <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                                <path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
                                                <path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
                                            </svg>
                                            <span className='ml-3'>Email</span>
                                        </a>
                                    </div>
                                    <div className='-ml-px flex w-0 flex-1'>
                                        <a
                                            href='tel:+1-202-555-0170'
                                            className='relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500'>
                                            {/* Heroicon name: mini/phone */}
                                            <svg className='h-5 w-5 text-gray-400' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                            <span className='ml-3'>Call</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </>
    )
}
