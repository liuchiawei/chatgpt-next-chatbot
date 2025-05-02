import { Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

export default function ChatHistory() {
  return (
    <Sidebar className="p-4">
      <SidebarHeader className="flex justify-center items-end">
        <SidebarTrigger className="cursor-pointer" />
      </SidebarHeader>
      <SidebarContent>
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
