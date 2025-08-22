'use client';

import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "janedoe@email.com",
    bio: "Lover of tech, coffee, and travel 🌍",
    phone: "+254 700 123 456",
    location: "Nairobi, Kenya",
    avatar: "/avatar.png", 
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditing(false);
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-lg p-6 rounded-2xl shadow-lg bg-black space-y-6">
        
        {/* Avatar + Name */}
        <div className="flex flex-col items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold">Bio</label>
            {editing ? (
              <textarea
                name="bio"
                value={user.bio}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="text-gray-600">{user.bio}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">Phone</label>
            {editing ? (
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="text-gray-600">{user.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold">Location</label>
            {editing ? (
              <input
                type="text"
                name="location"
                value={user.location}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p className="text-gray-600">{user.location}</p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          {editing ? (
            <>
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
