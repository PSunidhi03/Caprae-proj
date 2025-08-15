import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Users, Heart, X, Calendar } from "lucide-react";

const Matches = () => {
  const matches = [
    {
      id: 1,
      name: "Sarah Chen",
      company: "TechVentures LLC",
      matchDate: "2024-01-15",
      status: "Active",
      avatar: "SC",
      lastMessage: "I'd like to schedule a call to discuss...",
      messageTime: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Rodriguez", 
      company: "Rodriguez Capital",
      matchDate: "2024-01-12",
      status: "Active",
      avatar: "MR",
      lastMessage: "The financial documents look promising...",
      messageTime: "1 day ago"
    },
    {
      id: 3,
      name: "Emily Park",
      company: "Park Industries", 
      matchDate: "2024-01-10",
      status: "Pending Response",
      avatar: "EP",
      lastMessage: "Thank you for connecting with me...",
      messageTime: "3 days ago"
    }
  ];

  const pendingMatches = [
    {
      id: 4,
      name: "David Thompson",
      company: "Thompson Holdings",
      avatar: "DT",
      budgetRange: "$10M+",
      industries: ["Real Estate", "Construction"]
    }
  ];

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Matches</h1>
          <p className="text-muted-foreground">
            Your connections with potential buyers and active conversations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{matches.length}</div>
              <p className="text-xs text-muted-foreground">+2 this week</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Conversations</CardTitle>
              <MessageSquare className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {matches.filter(m => m.status === "Active").length}
              </div>
              <p className="text-xs text-muted-foreground">Ongoing discussions</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Responses</CardTitle>
              <Calendar className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {matches.filter(m => m.status === "Pending Response").length}
              </div>
              <p className="text-xs text-muted-foreground">Awaiting buyer response</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Matches */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">Active Matches</h2>
            <div className="space-y-4">
              {matches.map((match) => (
                <Card key={match.id} className="card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {match.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-medium text-foreground">{match.name}</h3>
                            <Badge 
                              variant={match.status === "Active" ? "default" : "secondary"}
                              className={match.status === "Active" ? "bg-success" : ""}
                            >
                              {match.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{match.company}</p>
                          <p className="text-sm text-muted-foreground">
                            Matched on {match.matchDate}
                          </p>
                          
                          {/* Last Message Preview */}
                          <div className="mt-3 p-3 bg-muted rounded-lg">
                            <p className="text-sm text-foreground">{match.lastMessage}</p>
                            <p className="text-xs text-muted-foreground mt-1">{match.messageTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" className="btn-primary flex-1">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pending Matches */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">New Match Requests</h2>
            <div className="space-y-4">
              {pendingMatches.map((match) => (
                <Card key={match.id} className="card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {match.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground mb-1">{match.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{match.company}</p>
                        
                        <div className="space-y-2">
                          <div>
                            <span className="text-sm font-medium text-foreground">Budget Range: </span>
                            <span className="text-sm text-muted-foreground">{match.budgetRange}</span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-foreground">Industries: </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {match.industries.map((industry) => (
                                <Badge key={industry} variant="outline" className="text-xs">
                                  {industry}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" className="btn-primary flex-1">
                        <Heart className="w-4 h-4 mr-2" />
                        Accept Match
                      </Button>
                      <Button variant="outline" size="sm">
                        <X className="w-4 h-4 mr-2" />
                        Decline
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {pendingMatches.length === 0 && (
                <Card className="card-interactive">
                  <CardContent className="p-8 text-center">
                    <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium text-foreground mb-2">No pending matches</h3>
                    <p className="text-sm text-muted-foreground">
                      New buyer matches will appear here when they express interest.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Matches;