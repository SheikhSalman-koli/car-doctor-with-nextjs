"use client"
import Link from 'next/link';
import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import SocialLogin from '../components/SocialLogin';

export default function LoginForm() {

  const router = useRouter()

   const handleLogin =async(e)=> {
     e.preventDefault()
     toast("submiting...")
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    try{
      const response =await signIn( 'credentials',{email, password, callbackUrl: '/', redirect: false} )
      if(response.ok){
        router.push('/')
        toast.success("logged in successfully!")
        form.reset()
      }else{
        toast.error("authentication failed")
      }
    }catch(error){
      toast.error("authentication failed")
    }

   }

  return (
      <form
      onSubmit={handleLogin}
      className="w-full max-w-md space-y-6">
              <h2 className="text-3xl font-bold text-center">Sign In</h2>
    
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                name='email'
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                name='password'
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Submit Button */}
           
              <button
              type="submit"
                className="w-full bg-[#FF3811] text-white py-2 rounded transition duration-200"
              >     
                Sign Up
              </button>
    
              {/* Social Login */}
              <div className="text-center">
                <p className="text-gray-500 mb-2">or sign up with</p>
                <SocialLogin></SocialLogin>
                 <p className='mt-6'>New In This Site ? <Link href='/auth/register'><span className='text-[#FF3811]'>Register</span></Link></p>
              </div>
            </form>
  )
}
