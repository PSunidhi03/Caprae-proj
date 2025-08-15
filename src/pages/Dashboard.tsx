import { useState } from "react";
import Layout from "@/components/Layout";
import BuyerCard from "@/components/dashboard/BuyerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Search, 
  Filter, 
  TrendingUp, 
  Users, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Buyer {
  id: string;
  name: string;
  company?: string;
  avatar?: string;
  budgetRange: string;
  industries: string[];
  location: string;
  timeline: string;
  status: "Ready to Buy" | "Research Phase" | "Active Negotiations";
  bio?: string;
  previousAcquisitions: number;
  experience: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Mock buyer data
  const buyers: Buyer[] = [
    {
      id: "1",
      name: "Sarah Chen",
      company: "TechVentures LLC",
      budgetRange: "$1M - $5M",
      industries: ["Technology", "SaaS", "E-commerce"],
      location: "San Francisco, CA",
      timeline: "Immediate (0-3 months)",
      status: "Ready to Buy",
      bio: "Serial entrepreneur looking to acquire profitable SaaS businesses with strong recurring revenue. Focus on B2B tools and automation platforms.",
      previousAcquisitions: 3,
      experience: "10+ years"
    },
    {
      id: "2",
      name: "Michael Rodriguez",
      company: "Rodriguez Capital",
      budgetRange: "$500K - $1M",
      industries: ["Manufacturing", "Healthcare", "Professional Services"],
      location: "Austin, TX",
      timeline: "Short-term (3-6 months)",
      status: "Research Phase",
      bio: "Private equity professional seeking manufacturing businesses with strong operational fundamentals and growth potential.",
      previousAcquisitions: 5,
      experience: "15+ years"
    },
    {
      id: "3",
      name: "Emily Park",
      company: "Park Industries",
      budgetRange: "$5M - $10M",
      industries: ["Retail", "Hospitality", "Food & Beverage"],
      location: "New York, NY",
      timeline: "Medium-term (6-12 months)",
      status: "Active Negotiations",
      bio: "Family office looking for established retail and hospitality businesses with proven track records and expansion opportunities.",
      previousAcquisitions: 2,
      experience: "8+ years"
    },
    {
      id: "4",
      name: "David Thompson",
      budgetRange: "$10M+",
      industries: ["Real Estate", "Construction", "Transportation"],
      location: "Miami, FL",
      timeline: "Long-term (12+ months)",
      status: "Ready to Buy",
      bio: "Real estate mogul expanding into adjacent industries. Interested in infrastructure and logistics companies.",
      previousAcquisitions: 8,
      experience: "20+ years"
    }
  ];

  const filters = ["All", "Ready to Buy", "Research Phase", "Active Negotiations"];

  const filteredBuyers = buyers.filter(buyer => {
    const matchesSearch = buyer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         buyer.industries.some(industry => 
                           industry.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesFilter = selectedFilter === "All" || buyer.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const handleAccept = (buyerId: string) => {
    const buyer = buyers.find(b => b.id === buyerId);
    toast({
      title: "Connection Request Sent! 🎉",
      description: `You've connected with ${buyer?.name}. They'll be notified and can start a conversation with you.`,
    });
  };

  const handleReject = (buyerId: string) => {
    toast({
      title: "Buyer Passed",
      description: "This buyer won't be shown to you again.",
    });
  };

  const handleViewProfile = (buyerId: string) => {
    // Navigate to detailed profile view
    console.log("View profile:", buyerId);
  };

  return (
    <Layout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-muted-foreground">
            Discover qualified buyers for your business. Swipe through profiles and connect with the right match.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">127</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Matches</CardTitle>
              <Users className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">8</div>
              <p className="text-xs text-muted-foreground">3 new this week</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">23</div>
              <p className="text-xs text-muted-foreground">5 unread</p>
            </CardContent>
          </Card>

          <Card className="card-interactive">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Deals in Progress</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2</div>
              <p className="text-xs text-muted-foreground">1 nearing completion</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search buyers by name or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedFilter(filter)}
                    className={selectedFilter === filter ? "btn-primary" : ""}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredBuyers.length} qualified buyers
          </p>
        </div>

        {/* Buyer Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredBuyers.map((buyer) => (
            <BuyerCard
              key={buyer.id}
              buyer={buyer}
              onAccept={handleAccept}
              onReject={handleReject}
              onViewProfile={handleViewProfile}
            />
          ))}
        </div>

        {filteredBuyers.length === 0 && (
          <div className="text-center py-12">
            <div className="mb-4">
              <Users className="w-16 h-16 text-muted-foreground mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No buyers found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find more buyers.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;