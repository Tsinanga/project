'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // 

// Define the Patient type
type Patient = {
  id: number;
  name: string;
  condition: string;
  assignedDoctor: string | null;
};

// Initial mock data
const initialPatients: Patient[] = [
  { id: 1, name: 'Jane Doe', condition: 'Fever', assignedDoctor: null },
  { id: 2, name: 'John Smith', condition: 'Fracture', assignedDoctor: null },
];

// Available doctors
const doctors = ['Dr. Alice', 'Dr. Bob', 'Dr. Charlie'];

export default function UnassignedPatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [selectedDoctors, setSelectedDoctors] = useState<{ [key: number]: string }>({});

  // Assign selected doctor to patient
  const handleAssign = (patientId: number) => {
    const doctor = selectedDoctors[patientId];
    if (!doctor) return alert('Please select a doctor first.');

    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId ? { ...p, assignedDoctor: doctor } : p
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Unassigned Patients</h1>

      {patients.filter((p) => !p.assignedDoctor).length === 0 ? (
        <p className="text-green-700">All patients have been assigned.</p>
      ) : (
        <div className="space-y-4">
          {patients
            .filter((p) => !p.assignedDoctor)
            .map((patient) => (
              <div
                key={patient.id}
                className="border rounded p-4 shadow-md flex items-center justify-between"
              >
                <div>
                  <h2 className="font-semibold">{patient.name}</h2>
                  <p className="text-sm text-gray-600">Condition: {patient.condition}</p>
                </div>

                <div className="flex items-center gap-4">
                  <select
                    className="border p-1 rounded"
                    value={selectedDoctors[patient.id] || ''}
                    onChange={(e) =>
                      setSelectedDoctors({
                        ...selectedDoctors,
                        [patient.id]: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc} value={doc}>
                        {doc}
                      </option>
                    ))}
                  </select>

                  <Link
                    href="/landing"
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Assign now
                  </Link>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
