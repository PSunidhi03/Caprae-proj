import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Search, MoreVertical } from "lucide-react";
import { useState } from "react";

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "TechVentures LLC",
      lastMessage: "I'd like to discuss the valuation details further...",
      time: "2 min ago",
      unread: 2,
      avatar: "SC"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      company: "Rodriguez Capital",
      lastMessage: "The financial documents look promising...",
      time: "1 hour ago",
      unread: 0,
      avatar: "MR"
    },
    {
      id: 3,
      name: "Emily Park",
      company: "Park Industries",
      lastMessage: "Can we schedule a call this week?",
      time: "Yesterday",
      unread: 1,
      avatar: "EP"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Chen",
      message: "Hi! I'm very interested in learning more about your business. The revenue projections look solid.",
      time: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      sender: "You",
      message: "Thank you for your interest! I'd be happy to provide more details. When would be a good time for a call?",
      time: "10:45 AM",
      isOwn: true
    },
    {
      id: 3,
      sender: "Sarah Chen",
      message: "I'd like to discuss the valuation details further. Are you available tomorrow afternoon?",
      time: "2:15 PM",
      isOwn: false
    }
  ];

  return (
    <Layout>
      <div className="h-screen flex">
        {/* Conversations List */}
        <div className="w-1/3 border-r border-border bg-card">
          <div className="p-4 border-b border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Messages</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="overflow-y-auto">
            {conversations.map((conversation, index) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedMessage(index)}
                className={`p-4 border-b border-border cursor-pointer transition-colors ${
                  selectedMessage === index ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {conversation.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-foreground truncate">
                        {conversation.name}
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        {conversation.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.company}
                    </p>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <Badge variant="default" className="bg-primary">
                      {conversation.unread}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {conversations[selectedMessage]?.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium text-foreground">
                    {conversations[selectedMessage]?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {conversations[selectedMessage]?.company}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-1 ${
                    message.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // Handle send message
                    setNewMessage("");
                  }
                }}
              />
              <Button className="btn-primary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Messages;