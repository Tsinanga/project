'use client';

import { useState } from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What are your visiting hours?",
      answer: "Visiting hours are from 8:00 AM to 8:00 PM every day. Emergency visits are allowed at any time."
    },
    {
      question: "Do I need an appointment to see a doctor?",
      answer: "We recommend booking an appointment, but walk-ins are also accepted depending on doctor availability."
    },
    {
      question: "Does the hospital accept insurance?",
      answer: "Yes, we accept most major insurance providers. Please check with our reception for confirmation."
    },
    {
      question: "Where can I get my lab results?",
      answer: "Lab results can be collected from the laboratory reception or accessed through our online patient portal."
    },
    {
      question: "What should I bring for admission?",
      answer: "Please bring your ID card, insurance details, current medication list, and any referral letters."
    },
    {
      question: "Do you have emergency services?",
      answer: "Yes, our emergency department is open 24/7 for all urgent and critical care needs."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 bg-green-100">
      <h1 className="text-4xl font-bold mb-6 text-green-900">Frequently Asked Questions</h1>
      
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-black shadow-md rounded-lg p-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left font-semibold text-lg flex justify-between items-center"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
