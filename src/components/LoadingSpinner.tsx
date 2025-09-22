
import React from 'react';
import { AiIcon } from './icons';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-slate-100 rounded-lg max-w-2xl animate-pulse">
      <div className="flex-shrink-0">
         <AiIcon className="w-6 h-6 text-slate-500"/>
      </div>
      <div className="flex-1 space-y-3">
        <div className="h-2 bg-slate-300 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-300 rounded col-span-2"></div>
          <div className="h-2 bg-slate-300 rounded col-span-1"></div>
        </div>
        <div className="h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
