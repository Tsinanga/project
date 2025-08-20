"use client";
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Plugged In </div>

       

        <ul className="hidden md:flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/feedback">Feedback</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>

      {isOpen && (
        <ul className=" mt-2 space-y-2">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
        </ul> 
      )}
    </nav>
  );
}
export default Navbar;