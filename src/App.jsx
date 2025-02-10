import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Sidebar } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MessageList } from "@/components/ui/message-list";

export default function ChatUI() {
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [model, setModel] = useState("o3-mini");

  return (
    <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex flex-col w-full h-full p-4">
          {/* Header */}
          <div className="flex justify-between items-center pb-4">
            <Select value={model} onValueChange={setModel}>
              <SelectTrigger className="w-48">
                {model}
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="o3-mini">o3-mini</SelectItem>
                <SelectItem value="o1">o1</SelectItem>
                <SelectItem value="4o-mini">4o-mini</SelectItem>
                <SelectItem value="llama-3.3">Llama 3.3</SelectItem>
                <SelectItem value="claude-3.5">Claude 3.5</SelectItem>
                <SelectItem value="mistral">Mistral</SelectItem>
              </SelectContent>
            </Select>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Chat Area */}
          <Card className="flex-1 overflow-auto rounded-xl shadow-md p-4">
            <CardContent>
              <MessageList />
            </CardContent>
          </Card>

          {/* Input Area */}
          <div className="mt-4 flex">
            <input className="flex-1 p-2 border rounded-lg" placeholder="Type your message..." />
            <Button className="ml-2">Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
