import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatHistory() {
  return (
    <Sidebar className="bg-background">
      <SidebarHeader className="p-4 flex justify-center items-end">
        <SidebarTrigger className="cursor-pointer" />
      </SidebarHeader>
      <SidebarContent className="px-4">
        <ul>
          <li>
            <h1>Chat History</h1>
          </li>
          <li>
            <h1>Chat History</h1>
          </li>
          <li>
            <h1>Chat History</h1>
          </li>
        </ul>
      </SidebarContent>
    </Sidebar>
  );
}
