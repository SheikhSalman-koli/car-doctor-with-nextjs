"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa6';


export default function SocialLogin() {

    const router = useRouter()
    const session = useSession()

    const handleSocialLogin = (providerName) => {
        // console.log(providerName);
        signIn(providerName)

    }

    useEffect(() => { 
        if(session?.data?.user){
            router.push("/")
            toast.success("logged in successfully!")
        }
    }, [session?.data?.user])

    return (
        <div className="flex justify-center space-x-4 text-xl text-gray-600">
            <p
                onClick={() => handleSocialLogin("google")}
                className='rounded-full bg-slate-200 p-3'
            >
                <FaGoogle />
            </p>
            <p
                onClick={() => handleSocialLogin("github")}
                className='rounded-full bg-slate-200 p-3'
            >
                <FaGithub />
            </p>
        </div>
    )
}
