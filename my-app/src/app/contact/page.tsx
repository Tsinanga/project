'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    
    <div className="min-h-screen bg-blue-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">
        <br/>
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
       
        <form
          onSubmit={handleSubmit}
          className="bg-black shadow-md rounded-2xl p-6 space-y-4"
        >
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full border p-3 rounded-lg h-32"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Company Info */}
        <div className="bg-black shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Our Contact Info</h2>
          <p className="mb-3"><strong>📍 Address:</strong> 123 Business Street, Nairobi, Kenya</p>
          <p className="mb-3"><strong>📞 Phone:</strong> +254 700 123 456</p>
          <p className="mb-3"><strong>📧 Email:</strong> contact@company.com</p>
          <p className="mb-3"><strong>⏰ Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.851938175165!2d36.82194631475364!3d-1.2920659990573982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1738e5a6f7c5%3A0x18f7d2e2c74e07f9!2sNairobi%20City!5e0!3m2!1sen!2ske!4v1690000000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
