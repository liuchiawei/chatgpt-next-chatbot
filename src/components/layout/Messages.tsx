import { cn } from "@/lib/utils";

export default function Messages({ messages, className }: { messages: any[], className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2 rounded-lg", className)}>
      {messages.map(message => (
        // message box
        <div key={message.id} className={cn("flex flex-col gap-1 w-fit p-4 bg-zinc-100 dark:bg-zinc-900 rounded-lg shadow-sm dark:shadow-none *:whitespace-pre-wrap", message.role === 'user' ? 'self-end' : 'self-start')}>
          {/* header: message role */}
          <div className="text-xs text-zinc-300 dark:text-zinc-700">
            {message.role === 'user' ? 'You' : 'AI'}
          </div>
          {/* body: message content */}
          {message.parts.map((part: any, i: number) => {
            switch (part.type) {
              case 'text':
                return <div className="block" key={`${message.id}-${i}`}>{part.text}</div>;
            }
          })}
        </div>
      ))}
    </div>
  );
}
