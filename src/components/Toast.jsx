import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/40 border border-indigo-400/30 animate-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-5 h-5 text-indigo-200 shrink-0" />
      <span className="text-xs sm:text-sm font-medium">{message}</span>
      <button 
        onClick={onClose}
        className="p-1 hover:bg-indigo-500 rounded-lg transition-colors ml-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
