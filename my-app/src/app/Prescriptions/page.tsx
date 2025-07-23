"use client"
import Link from 'next/link';

function Prescriptions() {

  return (
    <div className="min-h-screen p-6 bg-yellow-100">
      <h1 className="text-3xl font-bold text-white -700 mb-4">Discharged patients and doctors' notes </h1>  

      <div className="bg-gray-100 p-4 rounded shadow">
        <ul className="space-y-3">
          <li className="border-b pb-2">
            <p className="text-lg font-semibold"> Dr. Smith <br/> Patient :James Bond </p>
            <p className="text-sm text-gray-600">Diagnosis: Age/Sex: 45/M <br/>
             Ailment: Erectile Dysfunction<br/>
             Prescription:T. Sildenafil 50mg – 1 tablet orally, 30 minutes before intercourse.<br/> <br/>Do not take more than once daily.</p>
              <br/>

          <Link
          href="/Billing"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Billing
          </Link>
              </li>



             <li className="border-b pb-2">
             <p className="text-lg font-semibold">Dr. Magret <br/> Patient :Jacky Mabonde </p>
             <p className="text-sm text-gray-600">Age/Sex: 28/F Ailment: Common Cold <br/>Prescription:
             T. Levocetirizine 5mg – 1 tablet at night for 5 days <br/> 
             Syp. Cough Syrup (Ambroxol + Guaifenesin) – 5 ml thrice daily after meals <br/><br/>
             Steam inhalation twice daily
             <br/>
             <br/>

             <Link
              href="/Billing"
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
              >
             Billing
             </Link>

             </p>
             </li>


              <li className="border-b pb-2">
              <p className="text-lg font-semibold">Dr. Yatich <br/> Patient :John Mziza</p>
              <p className="text-sm text-gray-600">Age/Sex: 46/M <br/> Ailment: Acute Gastritis
             <br/>Prescription:T. Pantoprazole 40mg – 1 tablet before breakfast daily for 7 days<br/>
          T. Domperidone 10mg – 1 tablet before meals, twice daily
          <br/><br/> Eat small frequent meals; avoid spicy food</p>
          <br/>

          <Link
          href="/Billing"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Billing
          </Link>
          </li>



           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Sneha Patil <br/> Patient :Aman Khanna</p>
            <p className="text-sm text-gray-600">Age/Sex: 32/F <br/> Ailment: Migraine
         <br/>Prescription:T. Sumatriptan 50mg – take at onset of migraine
          <br/> T. Naproxen 250mg – 1 tablet if needed for pain
          <br/><br/> Maintain headache diary; avoid known triggers</p>
          <br/>

          <Link
          href="/Billing"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Billing
          </Link>
          </li>




           <li className="border-b pb-2">
            <p className="text-lg font-semibold">Dr. Meena Joshi <br/> Patient : Vikram Desai</p>
            <p className="text-sm text-gray-600">Age/Sex: 34/M <br/> Ailment: Lower Back Pain (Muscular Strain)
         <br/>Prescription:T. Aceclofenac + Thiocolchicoside – 1 tablet twice daily after meals for 5 days<br/>
         T. Pantoprazole 40mg – once daily before breakfast



          <br/> <br/>Hot fomentation and back stretching exercises</p>
          <br/>

          <Link
          href="/Billing"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
         >



          Billing
          </Link>



          </li>
        </ul>



        


      </div>
      


      
      </div>

    
  );
  
}

export default Prescriptions;

