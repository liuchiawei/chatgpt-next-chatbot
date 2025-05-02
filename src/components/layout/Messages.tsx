import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Messages({ messages, className }: { messages: any[], className?: string }) {
  return (
    <div className={cn("flex flex-col gap-2 mt-4 rounded-lg", className)}>
      {messages.map(message => (
        // message box
        <div key={message.id} className={cn("flex gap-2", message.role === 'user' ? 'self-end flex-row-reverse' : 'self-start')}>
          <Avatar className="row-span-2">
            { message.role === 'user' ? (
              // user avatar icon
              <AvatarImage src="https://github.com/shadcn.png" />
            ) : (
              // ai avatar icon
              <AvatarImage src="https://github.com/shadcn.png" />
            )}
            <AvatarFallback>
              {message.role === 'user' ? 'Me' : 'AI'}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 w-fit py-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-md shadow-sm dark:shadow-none *:whitespace-pre-wrap">
          {/* header: message role */}
          <div className="text-xs text-zinc-300 dark:text-zinc-700">
            {message.role === 'user' ? 'Me' : 'AI'}
          </div>
          {/* body: message content */}
          {message.parts.map((part: any, i: number) => {
            switch (part.type) {
              case 'text':
                return <div className="block" key={`${message.id}-${i}`}>{part.text}</div>;
            }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
