
import type { Metadata } from "next";
import Link from 'next/link';
import React from 'react';





export const metadata: Metadata = {

  title: "Medi",
 
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">

      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">

         On your way to better health
        
      </h1>
      <br/><br/><br/>
      
     
      <br/><br/>

      <div className="flex gap-3 flex-wrap font-serif">
      
        



        <Link
        
          href="/Login"
        
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          
        >
          Log In

        </Link>


        
        <Link
          href="/newaccount"
          className="bg-green-600 text-yellow-100 px-5 py-2 rounded hover:bg-green-700 transition"
        >



          Sign Up
        </Link>


        

        
      </div>

      
    </div>

  );
}
