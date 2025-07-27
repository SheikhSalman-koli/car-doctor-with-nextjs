import React from 'react'

import register from '../../../../public/assets/images/login/login.svg'
import Image from 'next/image';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row  p-15">
      {/* Left: Image Section */}
      <div className="flex-1 flex justify-center">
        {/* <img
          src={register}
          alt="Register"
          className="w-full h-64 md:h-full object-cover"
        /> */}
        <Image
         src={register}
          alt="Register"
          width={459}
          height={520}
        />
      </div>

      {/* Right: Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 border-1">
            <RegisterForm></RegisterForm>
      </div>
    </div>
  );
  
}
