import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className='relative bg-white'>
                <div className='pointer-events-none absolute inset-0 z-30 shadow' aria-hidden='true' />
                <div className='relative z-20'>
                    <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8'>
                        <div>
                            <a href='#' className='flex'>
                                <span className='sr-only'>Your Company</span>
                                <img className='h-8 w-auto sm:h-10' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
                            </a>
                        </div>
                        <div className='-my-2 -mr-2 md:hidden'>
                            <button
                                type='button'
                                className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                                aria-expanded='false'>
                                <span className='sr-only'>Open menu</span>
                                {/* Heroicon name: outline/bars-3 */}
                                <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                                </svg>
                            </button>
                        </div>
                        <div className='hidden md:flex md:flex-1 md:items-center md:justify-between'>
                            <nav className='flex space-x-10'>
                                <NavLink end to='/' className={({ isActive, isPending }) => (isActive ? 'active font-medium' : isPending ? 'pending' : '')}>
                                    Home
                                </NavLink>

                                <NavLink to='/articles' className={({ isActive, isPending }) => (isActive ? 'active font-medium' : isPending ? 'pending' : '')}>
                                    Article
                                </NavLink>

                                <NavLink to='/counting' className={({ isActive, isPending }) => (isActive ? 'active font-medium' : isPending ? 'pending' : '')}>
                                    Count
                                </NavLink>

                                <NavLink to='/form' className={({ isActive, isPending }) => (isActive ? 'active font-medium' : isPending ? 'pending' : '')}>
                                    Form
                                </NavLink>

                                <NavLink to='/todo' className={({ isActive, isPending }) => (isActive ? 'active font-medium' : isPending ? 'pending' : '')}>
                                    Todo
                                </NavLink>
                            </nav>
                            <div className='flex items-center md:ml-12'>
                                <NavLink to='/form' className='text-base font-medium text-gray-500 hover:text-gray-900'>
                                    Sign in
                                </NavLink>
                                <a
                                    href='#'
                                    className='ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                                    Sign up
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
