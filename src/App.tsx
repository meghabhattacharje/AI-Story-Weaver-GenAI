
import React, { useState, useEffect, useRef } from 'react';
import { StoryPart } from './types';
import { continueStory } from './services/geminiService';
import StoryDisplay from './components/StoryDisplay';
import UserInputForm from './components/UserInputForm';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const App: React.FC = () => {
  const [storyParts, setStoryParts] = useState<StoryPart[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const storyEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    storyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [storyParts, isLoading]);

  useEffect(() => {
    // Start with an initial prompt from the AI
    setStoryParts([
        { id: 'start-1', author: 'ai', text: 'In a realm where clouds were made of spun sugar and rivers flowed with liquid starlight, a lone adventurer stumbled upon a peculiar sight: a tiny, glowing door nestled in the trunk of an ancient, weeping willow. What happens next?' }
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const newUserPart: StoryPart = {
      id: Date.now().toString(),
      author: 'user',
      text: userInput.trim(),
    };

    const updatedStory = [...storyParts, newUserPart];
    setStoryParts(updatedStory);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const aiResponse = await continueStory(updatedStory);
      const newAiPart: StoryPart = {
        id: (Date.now() + 1).toString(),
        author: 'ai',
        text: aiResponse.trim(),
      };
      setStoryParts(prevParts => [...prevParts, newAiPart]);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred.');
      // Optional: remove user's part if AI fails
      // setStoryParts(storyParts);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col font-sans">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            AI Story Weaver
          </h1>
          <p className="text-gray-600">Collaborate with an AI to write a story.</p>
        </div>
      </header>

      <main className="flex-1 container mx-auto p-4 w-full flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <StoryDisplay storyParts={storyParts} />
          {isLoading && <LoadingSpinner />}
          <div ref={storyEndRef} />
        </div>
        
        <div className="sticky bottom-0 bg-amber-50/80 backdrop-blur-md py-4">
          <div className="max-w-4xl mx-auto">
            <ErrorMessage message={error} />
            <UserInputForm
              userInput={userInput}
              setUserInput={setUserInput}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
