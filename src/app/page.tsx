'use client';

import { useChat } from '@ai-sdk/react';
import ThemeToggle from '@/components/common/ThemeToggle';
import Messages from '@/components/layout/Messages';
import InputBox from '@/components/layout/InputBox';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full min-h-screen max-w-xl py-2 mx-auto stretch">
      <ThemeToggle className="fixed top-4 right-4" />
      {/* Chat History */}
      <Messages messages={messages} />
      {/* User Input Block */}
      <InputBox input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  );
}