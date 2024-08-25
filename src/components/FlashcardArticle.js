import React from "react";

const FlashcardArticle = () => {
  return (
    <div className="bg-[#F0F4F8] p-8 rounded-md max-w-2xl mx-auto">
      <div className="text-sm text-gray-500 rounded-full inline-block mb-4 px-4 py-1 bg-white">
        Useful Resources
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Why should I use Flashcards for revision?
      </h1>
      <div className="flex text-gray-500 space-x-4 mb-6">
        <span>Published 12 days ago</span>
        <span>Read time 4 mins</span>
      </div>
      <div className="bg-[#E8EEF4] rounded-md w-full h-64 flex items-center justify-center text-gray-400">
        Title image Place holder
      </div>
    </div>
  );
};

export default FlashcardArticle;
