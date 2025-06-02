import React from 'react';
import { useStore } from '../store';

function Settings() {
  const { settings, updateSettings } = useStore();

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Settings</h2>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) =>
                  updateSettings({ notifications: e.target.checked })
                }
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.sound}
                onChange={(e) =>
                  updateSettings({ sound: e.target.checked })
                }
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Enable Sound</span>
            </label>
          </div>
          <div>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={settings.theme === 'dark'}
                onChange={(e) =>
                  updateSettings({ theme: e.target.checked ? 'dark' : 'light' })
                }
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">Dark Theme</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}