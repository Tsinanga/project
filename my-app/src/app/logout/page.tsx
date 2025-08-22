'use client';

import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  const handleLogout = () => {
    // Example: clear session/localStorage
    localStorage.removeItem("user"); 
    
    // TODO: if using JWT/cookies, also call your API to clear session
    
    router.push("/login"); // redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-green-100 p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Log Out</h1>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
