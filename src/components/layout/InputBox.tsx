import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";
import InputOption from "../common/InputOption";
import { cn } from "@/lib/utils";
import { Message } from 'ai';
import { ChatHistory, saveChat } from '@/lib/chat-history';

export default function InputBox({ input, handleInputChange, handleSubmit, className }: { input: string, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, className?: string }) {
  return (
    <form onSubmit={handleSubmit} className={cn("grid grid-cols-[1fr_auto] gap-2 w-full p-2 mb-8 border rounded-lg shadow-xl", className)}>
        <Input
          type="text"
          className="p-2 shadow-none border-none"
          value={input}
          placeholder="質問を入力してください"
          onChange={handleInputChange}
        />
        <Button type="submit" size="icon" className="cursor-pointer rounded-full">
          <Send className="size-4" />  
        </Button>
        <InputOption />
      </form>
  );
}
