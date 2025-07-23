"use client"
import Link from 'next/link';

function Registry() {

  return (
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-3xl font-bold text-white -700 mb-4">New Patients</h1>

      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">
          <li className="border-b pb-2">
                <p className="text-lg font-semibold">Name:</p>
                <p className="text-sm text-gray-600">Age: <br/> 
               Check In Date and Time: <br/>
                Sex: <br/> 
                Address: <br/> 
                Phone Number: <br/> 
                Email: <br/>
                Date of Birth: <br/>
                Insurance: <br/>
                Medical History: <br/>
                Allergies: <br/>
                Current medications: <br/>
                Current Conditions: <br/>
                Doctor assigned to: <br/>

            </p>
            <br/><br/>

            <Link
          href="/Patient"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Register
          </Link>

    
          </li>
         
        </ul>
        


      </div>


      
      </div>
    
  );
  
}
export default Registry;

