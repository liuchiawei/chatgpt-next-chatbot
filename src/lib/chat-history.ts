import { Message } from "ai";

export interface ChatHistory {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export function createNewChat(): ChatHistory {
  return {
    id: crypto.randomUUID(),
    title: "新對話",
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export function saveChat(chat: ChatHistory) {
  const chats = getChats();
  const existingIndex = chats.findIndex((c) => c.id === chat.id);

  if (existingIndex >= 0) {
    chats[existingIndex] = chat;
  } else {
    chats.push(chat);
  }

  localStorage.setItem("chatHistory", JSON.stringify(chats));
}

export function getChats(): ChatHistory[] {
  if (typeof window === "undefined") return [];
  const chats = localStorage.getItem("chatHistory");
  return chats ? JSON.parse(chats) : [];
}

export function getChat(id: string): ChatHistory | undefined {
  return getChats().find((chat) => chat.id === id);
}

export function deleteChat(id: string) {
  const chats = getChats().filter((chat) => chat.id !== id);
  localStorage.setItem("chatHistory", JSON.stringify(chats));
}
