"use client"
import { saveUser } from '@/app/action/auth/saveUser';
import Link from 'next/link';
import React from 'react'
import SocialLogin from '../components/SocialLogin';

export default function RegisterForm() {

  const handleRegister =async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form?.name.value
    const email = form?.email.value
    const password = form?.password.value
    const payload = { name, email, password }
    const res = await saveUser(payload)
    if(res.insertedId){
      alert('registration successfully!')
    }else if(res.message){
      alert(res.message)
    }

    // console.log(res);
    form.reset()
  }

  return (
    <form
      onSubmit={handleRegister}
      className="w-full max-w-md space-y-6">
      <h2 className="text-3xl font-bold text-center">Sign Up</h2>

      {/* Name */}
      <div>
        <label className="block text-gray-700 mb-1">Name</label>
        <input
          name='name'
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

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
        <p className='mt-6'>Already Have An Account ? <Link href='/auth/login'><span className='text-[#FF3811]'>Login</span></Link></p>
      </div>
    </form>
  )
}
