'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    rating: 0,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear errors on typing
  };

  const handleRating = (rating: number) => {
    setForm({ ...form, rating });
    setErrors({ ...errors, rating: '' });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Enter a valid email';
    if (form.rating === 0) newErrors.rating = 'Please select a rating';
    if (!form.message.trim()) newErrors.message = 'Feedback cannot be empty';
    else if (form.message.length < 10)
      newErrors.message = 'Feedback must be at least 10 characters long';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      alert(`Thank you for your feedback, ${form.name || 'Guest'}!`);
      setForm({ name: '', email: '', rating: 0, message: '' });
    }, 1500);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', rating: 0, message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 dark:text-blue-400">
        We Value Your Feedback
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl">
        Your feedback helps us improve our services. Please take a moment to
        share your thoughts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 space-y-6 w-full max-w-lg"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <p className="font-semibold mb-2">Rate your experience:</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleRating(star)}
                className={`text-3xl ${
                  form.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                } hover:scale-110 transition-transform`}
              >
                ★
              </button>
            ))}
          </div>
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block font-semibold mb-1">Your Feedback</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your feedback here..."
            className="w-full border p-3 rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-gray-500 text-sm mt-1">
            {form.message.length}/300 characters
          </p>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit + Reset */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Feedback'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-300 text-black py-3 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>
        </div>

       
        {submitted && !loading && (
          <p className="text-green-600 font-semibold text-center mt-4">
            🎉 Your feedback was submitted successfully!
          </p>
        )}
      </form>

     
      <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        <p>📧 We’ll never share your email with anyone else.</p>
        <p>© 2025 MediApp. All rights reserved.</p>
      </div>
    </div>
  );
}
