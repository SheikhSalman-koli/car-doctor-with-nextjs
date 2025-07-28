"use client"
import React from 'react'
import logo from '../../../public/assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

export default function Navber() {

    const {data:session, status} = useSession()
   
    // const links = <>
    //   <li><Link href='/'>Home</Link></li>
    //   <li><Link href='/'>About</Link></li>
    //   <li><Link href='/'>Services</Link></li>
    //   <li><Link href='/'>Blog</Link></li>
    //   <li><Link href='/'>Contact</Link></li>
    // </>

    const navMenu = () => {
        return (<>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/'>About</Link></li>
            <li><Link href='/'>Services</Link></li>
            <li><Link href='/'>Blog</Link></li>
            <li><Link href='/'>Contact</Link></li>
        </>)
    }


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navMenu()}
                    </ul>
                </div>
                <Link href='/'>
                    <Image
                        src={logo}
                        width={80}
                        height={56}
                        alt='logo'
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navMenu()}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {status == "authenticated" ? 
                <>
                    <Image
                    src={session?.user?.image}
                    width={30}
                    height={30}
                    className='rounded-full'
                    alt='user-photo'
                    />
                   <button
                   className='btn btn-outline rounded-sm'
                   onClick={()=> signOut()}
                   >Log Out</button> 
                </> 
                : 
                <>
                <Link href='/auth/register'>Register</Link>
                <Link href='/auth/login'>Login</Link>
                </>}
                <button className="btn text-[#FF3811] rounded-sm btn-outline border-1 border-[#FF3811]">Appointment</button>
            </div>
        </div>
    )
}
