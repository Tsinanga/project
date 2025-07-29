import type { Metadata } from "next";
import Link from 'next/link';



export const metadata: Metadata = {

  title: "MediApp| Homepage",
 
};

export default function landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">

      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-4">

        Welcome to  MediApp 
        The Best App
        
      </h1>
      <br/><br/><br/>
      
      <p className="text-lg text-gray-700 mb-6 text-center max-w-xl font-bold texr-serif">
         
         MediApp is a secure platform for:
         managing patient records
         assigning doctors,
         tracking prescriptions with ease.
      </p>

      <br/><br/>

      <div className="flex gap-3 flex-wrap font-serif">
        <p> Kindly select your user profile:</p>
        



        <Link
        
          href="/Patient"
        
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          
        >
          Patient
         
        </Link>


        
        <Link
          href="/Doctor"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
        >



          Doctor
        </Link>


        <Link
          href="/Prescriptions"
          className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
          >
          Accountant
          </Link>
 
 

          <Link
        
          href="/Registry"
        
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          
        >
          Registry
         
        </Link>
        

        
      </div>

      
    </div>

  );
}
