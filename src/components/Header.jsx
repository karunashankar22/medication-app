import React from 'react';
import { useStore } from '../store';

function Header() {
  const { activeView, setActiveView, settings } = useStore();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            MedTracker
          </h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveView('medications')}
              className={`px-4 py-2 rounded-md ${
                activeView === 'medications'
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Medications
            </button>
            <button
              onClick={() => setActiveView('history')}
              className={`px-4 py-2 rounded-md ${
                activeView === 'history'
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              History
            </button>
            <button
              onClick={() => setActiveView('settings')}
              className={`px-4 py-2 rounded-md ${
                activeView === 'settings'
                  ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Settings
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header