'use client';

import { useChat } from '@ai-sdk/react';
import ThemeToggle from '@/components/common/ThemeToggle';
import ChatPage from '@/components/layout/ChatPage';
import ChatHistory from '@/components/layout/ChatHistory';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <SidebarProvider>
      <div className="w-full h-full flex">
        <ThemeToggle className="fixed top-4 right-4" />
        <ChatHistory />
        <SidebarTrigger className="fixed top-4 left-4 cursor-pointer" />
        <ChatPage messages={messages} input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </div>
    </SidebarProvider>
  );
}