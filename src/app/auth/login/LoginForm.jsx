"use client"
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa6';

export default function LoginForm() {
  return (
      <form className="w-full max-w-md space-y-6">
              <h2 className="text-3xl font-bold text-center">Sign In</h2>
    
              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Password */}
              <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
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
                 <p className='mt-6'>New In This Site ? <Link href='/auth/register'><span className='text-[#FF3811]'>Register</span></Link></p>
              </div>
            </form>
  )
}
