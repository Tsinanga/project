"use client"
import Link from 'next/link';

function Newpatient() {

  return (
    
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-3xl font-bold text-white -700 mb-4">Patient List</h1>
      <h2 className="text-3xl font-bold text-white -700 mb-4">New Patient</h2>


      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">


          <li className="border-b pb-2">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Age: 45 <br/>
            Phone number +234 567 876</p>
            Check in date and time: 25/05/2025 12:00 AM <p/>
            <br/>
         
          <Link
          href="/Doctor"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>

            
          </li>

          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Jane Doe</p>
            <p className="text-sm text-gray-600">Age: 19 <br/>
            Phone number +254 376 987</p>
            Check in date and time: 25/05/2025 12:42 AM <p/>
            <br/>
         
          <Link
          href="/Doctor"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>

            
          </li>
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">John Deer</p>
            <p className="text-sm text-gray-600">Age: 15 <br/>
            Phone number +234 567 876</p>
            Check in date and time: 25/05/2025 01:00 PM <p/>
            <br/>
         
          <Link
          href="/Doctor"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>

            
          </li>


           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Hanita mzee</p>
            <p className="text-sm text-gray-600">Age: 35 <br/>
            Phone number +234 567 876</p>
            Check in date and time: 25/05/2025 02:00 PM <p/>
            <br/>
         
          <Link
          href="/Doctor"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Assign
          </Link>

            
          </li>

           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Mzee Mambo</p>
            <p className="text-sm text-gray-600">Age: 29 <br/>
            Phone number +534 789 234</p>
            Check in date and time: 25/05/2025 02:27 AM <p/>
            <br/>
         
          <Link
          href="/Doctor"
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

export default Newpatient;

