"use client"
import Link from 'next/link';

function Patient() {

  return (
    
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-3xl font-bold text-white -700 mb-4">Patient List</h1>
      <h2 className="text-3xl font-bold text-white -700 mb-4">Ongoing sessions</h2>


      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">


          <li className="border-b pb-2">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Age: 45 | Assigned Doctor: Dr. Smith</p>
          <br/>
          <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>

            
          </li>

          <li className="border-b pb-2">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Age: 45 | Assigned Doctor: Dr. Smith</p>
          <br/>
          <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>

            
          </li>
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-600">Age: 38 | Assigned Doctor: Dr. Patel</p>
<br/>
            <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>
          </li>


           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Lee Sande</p>
            <p className="text-sm text-gray-600">Age: 45 | Assigned Doctor: Dr. Gumey</p>
            <br/>
            <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>
          </li>

           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Warren Thiongo</p>
            <p className="text-sm text-gray-600">Age: 45 | Assigned Doctor: Dr. Maggie</p>
            <br/>
            <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>
          </li>


           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Weezy</p>
            <p className="text-sm text-gray-600">Age: 69 | Assigned Doctor: Dr. Tee</p>
            <br/>
            <Link
          href="/Prescriptions"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Check out
          </Link>
          </li>
        </ul>


      </div>


      
    </div>
    
  );
  
}

export default Patient;

