import React from 'react';
import { FaRobot } from 'react-icons/fa'; // Import chatbot-like icon from react-icons

const Loading = () => {
  return (
    <section className="h-full w-full grid place-content-center">
      <div className="flex items-center justify-center gap-3 text-8xl">
        <FaRobot className="text-blue-500" /> {/* Chatbot-themed robot icon */}
      </div>
      <div className="loader" />
    </section>
  );
};

export default Loading;
