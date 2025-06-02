import React from 'react';
import { useStore } from '../store';
import { format } from 'date-fns';

function MedicationList() {
  const { medications, deleteMedication, logMedicationTaken } = useStore();

  const handleTaken = (medicationId) => {
    logMedicationTaken(medicationId, true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Today's Medications</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {medications.map((medication) => (
          <div
            key={medication.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {medication.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{medication.dosage}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Time: {medication.schedule.times[0]}
                </p>
              </div>
              <button
                onClick={() => deleteMedication(medication.id)}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={() => handleTaken(medication.id)}
                className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Mark as Taken
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MedicationList