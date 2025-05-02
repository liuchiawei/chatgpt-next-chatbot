import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function Messages({ messages, className, containerClassName }: { messages: any[], className?: string, containerClassName?: string }) {
  return (
    <div className={cn("flex flex-col gap-2 mt-4 rounded-lg", containerClassName)}>
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
          <div className={cn("flex flex-col gap-1 w-fit py-2 px-4 rounded-md shadow-sm dark:shadow-none *:whitespace-pre-wrap", className)}>
          {/* header: message role */}
          <div className="text-xs text-zinc-300 dark:text-zinc-600">
            {message.role === 'user' ? 'Me' : 'AI'}
          </div>
          {/* body: message content */}
          {message.parts.map((part: any, i: number) => {
            switch (part.type) {
              case 'text':
                return <div className="block" key={`${message.id}-${i}`}>{part.text}</div>;
              case 'tool-invocation':
                return (
                  <pre key={`${message.id}-${i}`}>
                    {JSON.stringify(part.toolInvocation, null, 2)}
                  </pre>
                );
            }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
