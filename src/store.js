import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set) => ({
      medications: [],
      history: [],
      settings: {
        theme: 'light',
        notifications: true,
        sound: true,
      },
      activeView: 'medications',

      addMedication: (medication) =>
        set((state) => ({
          medications: [...state.medications, { ...medication, id: Date.now() }],
        })),

      deleteMedication: (id) =>
        set((state) => ({
          medications: state.medications.filter((med) => med.id !== id),
        })),

      updateMedication: (id, updates) =>
        set((state) => ({
          medications: state.medications.map((med) =>
            med.id === id ? { ...med, ...updates } : med
          ),
        })),

      logMedicationTaken: (medicationId, taken) =>
        set((state) => ({
          history: [
            ...state.history,
            {
              id: Date.now(),
              medicationId,
              taken,
              timestamp: new Date().toISOString(),
            },
          ],
        })),

      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),

      setActiveView: (view) => set({ activeView: view }),
    }),
    {
      name: 'medication-store',
    }
  )
);