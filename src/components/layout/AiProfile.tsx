import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AiProfile() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Avatar className="size-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>
          AI
        </AvatarFallback>
      </Avatar>
      <h1 className="text-xl font-bold mt-4">Evil Morty</h1>
      <h2 className="text-sm text-zinc-500">79⊢⊇V</h2>
    </div>
  );
}
