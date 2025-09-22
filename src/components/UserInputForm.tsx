
import React from 'react';
import { SendIcon } from './icons';

interface UserInputFormProps {
  userInput: string;
  setUserInput: (input: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

const UserInputForm: React.FC<UserInputFormProps> = ({ userInput, setUserInput, onSubmit, isLoading }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && userInput.trim()) {
        onSubmit(e as any); // Type assertion to satisfy form event
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex items-start space-x-3 w-full">
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={isLoading ? "The AI is weaving its tale..." : "Continue the story..."}
        disabled={isLoading}
        rows={2}
        className="flex-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={isLoading || !userInput.trim()}
        className="p-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <SendIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default UserInputForm;
