"use client";
import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Signup() {
  const [form, setForm] = useState({name: '', age: '',email: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/patients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message || data.error);
      
  };


  return (
    
    <div>
       <br/><br/>
       <br/><br/>
         <h1>Patient Signup:</h1>
         <form onSubmit={handleSubmit}>
             <textarea
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          rows={2}
          cols={30}
          required
        />
        <textarea
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          rows={1}
          cols={10}
          required
        />
        <textarea
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          rows={2}
          cols={30}
          required
        />


               <Link
        
          href="/landing"
        
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          
        >
          Sign up
         
        </Link>

      </form>
      <p>{message}</p>




    </div>
  );
}
