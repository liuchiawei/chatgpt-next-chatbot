'use client';

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { ChatHistory as ChatHistoryType, createNewChat, deleteChat, getChats, saveChat, editChatTitle } from "@/lib/chat-history";

export default function ChatHistory() {
  const router = useRouter();
  const pathname = usePathname();
  const [chats, setChats] = useState<ChatHistoryType[]>(getChats());
  const [editingChatTitle, setEditingChatTitle] = useState<string | null>(null);

  const handleNewChat = () => {
    const newChat = createNewChat();
    saveChat(newChat);
    setChats([newChat, ...chats]);
    router.push(`/chat/${newChat.id}`);
  };

  const handleDeleteChat = (id: string) => {
    deleteChat(id);
    setChats(chats.filter(chat => chat.id !== id));
  };

  const handleEditChatTitle = (id: string) => {
    setEditingChatTitle(id);
  };

  return (
    <Sidebar className="bg-background">
      <SidebarHeader className="p-4 flex justify-between items-end">
        <SidebarTrigger className="cursor-pointer" />
      </SidebarHeader>
      <SidebarContent className="px-4">
        <Button variant="ghost" size="icon" className="cursor-pointer" onClick={handleNewChat}>
          <Plus className="size-4" />
        </Button>
        <ul className="space-y-2">
          {chats.map(chat => (
            <li key={chat.id} className={`flex items-center justify-between rounded-lg hover:brightness-95 dark:hover:brightness-120 *:data-list-btn:opacity-0 hover:*:data-list-btn:opacity-100 ${pathname === `/chat/${chat.id}` ? 'bg-zinc-300 dark:bg-zinc-700' : 'bg-zinc-200 dark:bg-zinc-800'}`}>
              <button 
                onClick={() => router.push(`/chat/${chat.id}`)}
                className="flex-1 text-left truncate p-2 cursor-pointer"
              >
                {editingChatTitle === chat.id ? (
                  <Input title="title" type="text" className="bg-background border-none focus-visible:ring-0" value={chat.title} onChange={(e) => setChats(chats.map(c => c.id === chat.id ? { ...c, title: e.target.value } : c))} onSubmit={() => {
                    editChatTitle(chat.id, chat.title);
                    setEditingChatTitle(null);
                  }} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setEditingChatTitle(null);
                    }
                  }} />
                ) : (
                  chat.title
                )}
              </button>
              <Button data-list-btn variant="ghost" size="icon" className="cursor-pointer" onClick={() => handleEditChatTitle(chat.id)}>
                <Pencil className="size-4" />
              </Button>
              <Button 
                data-list-btn
                variant="ghost" 
                size="icon" 
                className="cursor-pointer"
                onClick={() => handleDeleteChat(chat.id)}
              >
                <Trash2 className="size-4" />
              </Button>
            </li>
          ))}
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}
