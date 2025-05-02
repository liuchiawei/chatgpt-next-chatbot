import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { ChatHistory as ChatHistoryType, createNewChat, deleteChat, getChats, saveChat } from "@/lib/chat-history";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ChatHistory() {
  const router = useRouter();
  const [chats, setChats] = useState<ChatHistoryType[]>(getChats());

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

  return (
    <Sidebar className="bg-background">
      <SidebarHeader className="p-4 flex justify-between items-center">
        <SidebarTrigger className="cursor-pointer" />
        <Button variant="ghost" size="icon" onClick={handleNewChat}>
          <Plus className="h-4 w-4" />
        </Button>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <ul className="space-y-2">
          {chats.map(chat => (
            <li key={chat.id} className="group flex items-center justify-between p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
              <button 
                onClick={() => router.push(`/chat/${chat.id}`)}
                className="flex-1 text-left truncate"
              >
                {chat.title}
              </button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="opacity-0 group-hover:opacity-100"
                onClick={() => handleDeleteChat(chat.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}
