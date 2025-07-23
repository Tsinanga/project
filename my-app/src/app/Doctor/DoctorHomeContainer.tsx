"use client";
import Link from 'next/link';
import React from 'react';

function Doctor() {
  

  return (
    <div className="min-h-screen p-6 bg-yellow-100">
    
      <h1 className="text-2xl font-stretch-normal text-white -700 mb-4">Doctors On Duty</h1>  
      <h2 className="text-2xl font-stretch-normal text-white -700 mb-4">Unassigned Doctors</h2> 

      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Mary</p>
            <p className="text-sm text-gray-600">Age: 55 <br/> Specialty: Cardiology <br/> Phone Number | +234 567 890 <br/> Email | mary@gmail.com</p>
<br/>
            <Link
          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>

          </li>
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Omoso.G  </p>
            <p className="text-sm text-gray-600">Age: 38 <br/> Specialty: Dermatology<br/> Phone Number | +234 554 789<br/> Email | omoso@gmail.com</p>
 <br/>
  <Link

          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>          
          </li>
           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Aguta </p>
            <p className="text-sm text-gray-600">Age: 66 <br/> Specialty: Gynecology<br/> Phone Number | +234 987 654<br/> Email | calypsoaguta@gmail.com</p>
           <br/>
           <Link

          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>
          </li>
           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Tsinanga</p>
            <p className="text-sm text-gray-600">Age: 45 <br/> Specialty: Psychologyst <br/> Phone Number | +234 435 674<br/> Email | dextertsinanga@gmail.com</p>
            <br/>
            <Link
          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>
          </li>

          
           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Wiz</p>
            <p className="text-sm text-gray-600">Age: 69 <br/> Specialty: Urology <br/> Phone Number | +234 711 290<br/> Email | wizkhalifa@gmail.com</p>
            <br/>
            <Link
          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>
          </li>
        </ul>


      </div>


      
      </div>
    
  );
  
}

export default Doctor;

