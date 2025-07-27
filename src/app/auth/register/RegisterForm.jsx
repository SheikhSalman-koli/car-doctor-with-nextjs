"use client"
import { saveUser } from '@/app/action/auth/saveUser';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa6';

export default function RegisterForm() {

  const handleRegister =async (e) => {
    e.preventDefault()
    const form = e.target
    const name = form?.name.value
    const email = form?.email.value
    const pass = form?.pass.value
    const payload = { name, email, pass }
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
          name='pass'
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
        <div className="flex justify-center space-x-4 text-xl text-gray-600">
          <FaGoogle className="hover:text-red-500 cursor-pointer" />
          <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          <FaFacebook className="hover:text-blue-600 cursor-pointer" />
        </div>
        <p className='mt-6'>Already Have An Account ? <Link href='/auth/login'><span className='text-[#FF3811]'>Login</span></Link></p>
      </div>
    </form>
  )
}
