import React from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import MedicationList from './components/MedicationList';
import AddMedicationForm from './components/AddMedicationForm';
import HistoryView from './components/HistoryView';
import Settings from './components/Settings';
import { useStore } from './store';

function App() {
  const { activeView } = useStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Toaster position="top-center" />
      <Header />
      <main className="container mx-auto px-4 py-8">
        {activeView === 'medications' && (
          <>
            <AddMedicationForm />
            <MedicationList />
          </>
        )}
        {activeView === 'history' && <HistoryView />}
        {activeView === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App