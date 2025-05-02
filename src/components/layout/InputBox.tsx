import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Send } from "lucide-react";

export default function InputBox({ input, handleInputChange, handleSubmit }: { input: string, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_auto] gap-2 fixed bottom-0 w-full max-w-md p-2 mb-8 border rounded-lg shadow-xl">
        <Input
          type="text"
          className="p-2 shadow-none border-none"
          value={input}
          placeholder="質問を入力してください"
          onChange={handleInputChange}
        />
        <Button type="submit" size="icon" className="cursor-pointer">
          <Send className="w-4 h-4" />  
        </Button>
      </form>
  );
}
