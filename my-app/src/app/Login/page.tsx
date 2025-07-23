
"use client";

import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import {useRouter } from "next/navigation";



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


async function handleSignup(e: React.SyntheticEvent){
  e.preventDefault();

  console.log("Logging in with", email, password);
  const loginData= {
    email:email,
    password:password
  }

  await loginService(loginData);

}

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto mt-10 space-y-4">
<br/><br/>
<br/><br/>
<br/><br/>

<br/><br/>
<br/><br/>
<br/><br/>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <br/>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <br/>

      


      <button        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
       Log In
      </button>
    </form>
  );
}


