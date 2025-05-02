import Messages from "./Messages";
import InputBox from "./InputBox";
import { Message } from 'ai';

export default function ChatSection({ messages, input, handleInputChange, handleSubmit }: { messages: Message[], input: string, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full min-h-screen max-w-xl py-2 mx-auto stretch">
      {/* Chat History */}
      <Messages messages={messages} className="bg-zinc-100 dark:bg-zinc-800" />
      {/* User Input Block */}
      <InputBox input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} className="bg-zinc-100 dark:bg-zinc-800" />
    </div>
  );
}
