
import React from 'react';
import { StoryPart } from '../types';
import { AiIcon } from './icons';

interface StoryDisplayProps {
  storyParts: StoryPart[];
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ storyParts }) => {
  return (
    <div className="space-y-6 font-serif text-lg leading-relaxed text-gray-800">
      {storyParts.map((part) => (
        <div key={part.id} className={`flex items-start gap-4 ${part.author === 'user' ? 'justify-end' : ''}`}>
          {part.author === 'ai' && (
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <AiIcon className="w-5 h-5 text-slate-600" />
            </div>
          )}
          <div
            className={`p-4 rounded-xl max-w-2xl ${
              part.author === 'user'
                ? 'bg-blue-500 text-white rounded-br-none'
                : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
            }`}
          >
            <p style={{ whiteSpace: 'pre-wrap' }}>{part.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryDisplay;
