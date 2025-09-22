
import React from 'react';

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className || "w-6 h-6"}
    >
        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
    </svg>
);

export const AiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className || "w-6 h-6"}
  >
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 4.5zm6.75 0a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM9 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 019 15zm6.75 0a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5zM5.25 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM15 9.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM8.25 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zM12 9A.75.75 0 0112.75 9.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 9z" clipRule="evenodd" />
    <path d="M4.5 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75zM21 3.75a.75.75 0 00-1.5 0v16.5a.75.75 0 001.5 0V3.75z" />
  </svg>
);
