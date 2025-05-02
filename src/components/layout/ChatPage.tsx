import Messages from "./Messages";
import InputBox from "./InputBox";

export default function ChatPage({ messages, input, handleInputChange, handleSubmit }: { messages: any[], input: string, handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }) {
  return (
    <div className="flex flex-col justify-between gap-4 w-full h-full min-h-screen max-w-xl py-2 mx-auto stretch">
      {/* Chat History */}
      <Messages messages={messages} />
      {/* User Input Block */}
      <InputBox input={input} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
    </div>
  );
}
