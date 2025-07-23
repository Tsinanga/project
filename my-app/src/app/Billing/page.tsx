"use client"
import Link from 'next/link';

function Billing() {
  

  return (
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-3xl font-bold text-white -700 mb-4">Accounts </h1>
     <br/>

      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Mary Agatha</p>
            <p className="text-sm text-gray-600">Age: 55 <br/>  Phone Number | +234 567 890 , Email | mary@gmail.com<br/>
            No. of days admitted:10 <br/>
            No. of drugs administered: 5. <br/>1. Ozempic 200mg 5$ per 100mg = 10$ <br/>
        
            2. Hydrocodone 100mg 5$ per 100mg = 10$ <br/>
            3. Ibuprofen 100mg 19$ per 100mg = 19$ <br/>
            4. Aspirin 100mg 5$ per 100mg = 5$ <br/>
            5. Paracetamol 300mg 8$ per 100mg = 24$ <br/>

            Total price = 58$
            </p>
          </li>
          <li className="border-b pb-2">
            <p className="text-lg font-semibold">Vincent.G  </p>
            <p className="text-sm text-gray-600">Age: 38 <br/> Phone Number | +234 554 789  Email | vincent@gmail.com <br/>
            No. of days admitted: 0<br/>
            No. of drugs administered: 3. <br/>
            1. Ibuprofen 150mg 19$ per 100mg = 29$ <br/>
            2. Aspirin 600mg 5$ per 100mg = 30$ <br/>
            3. Paracetamol 900mg 8$ per 100mg = 72$ <br/>

            Total price = 131$
            </p>

          </li>
           <li className="border-b pb-2">
             <p className="text-lg font-semibold"> Emmanuel Patrick </p>
            <p className="text-sm text-gray-600">Age: 28 <br/> Phone Number | +234 445 563  Email | emmanuel@gmail.com <br/>
            No. of days admitted: 14<br/>
            No. of drugs administered: 3. <br/>
            1. Ibuprofen 900mg 19$ per 100mg = 171$ <br/>
            2. Aspirin 1000mg 5$ per 100mg = 50$ <br/>
            3. Paracetamol 900mg 8$ per 100mg = 72$ <br/>

            Total price = 293$
            </p>
          </li>
         
        </ul>


      </div>


      
      </div>
    
  );
  
}

export default Billing;

