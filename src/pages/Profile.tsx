import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign,
  Edit,
  Star,
  TrendingUp,
  Award
} from "lucide-react";

const Profile = () => {
  const businessData = {
    name: "TechFlow Solutions",
    industry: "Technology",
    founded: "2018",
    employees: "25-50",
    location: "Austin, TX",
    revenue: "$2.5M ARR",
    askingPrice: "$8M - $12M",
    description: "Leading SaaS platform for workflow automation, serving 500+ enterprise clients with 95% retention rate."
  };

  const ownerData = {
    name: "John Doe",
    title: "CEO & Founder",
    experience: "15+ years",
    previousExits: 2,
    education: "MBA from Stanford"
  };

  const achievements = [
    { icon: TrendingUp, label: "300% Revenue Growth", value: "Last 3 Years" },
    { icon: Star, label: "4.8/5 Customer Rating", value: "500+ Reviews" },
    { icon: Award, label: "Industry Recognition", value: "Best SaaS 2023" }
  ];

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Business Profile</h1>
          <p className="text-muted-foreground">
            Your complete business profile as seen by potential buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Owner Info */}
          <div className="space-y-6">
            {/* Owner Profile */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Owner Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{ownerData.name}</h3>
                    <p className="text-muted-foreground">{ownerData.title}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-foreground">Experience</h4>
                    <p className="text-sm text-muted-foreground">{ownerData.experience}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Previous Exits</h4>
                    <p className="text-sm text-muted-foreground">{ownerData.previousExits} successful acquisitions</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Education</h4>
                    <p className="text-sm text-muted-foreground">{ownerData.education}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{achievement.label}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Business Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Business Overview */}
            <Card className="card-interactive">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5" />
                    <span>Business Overview</span>
                  </CardTitle>
                  <CardDescription>Complete business information</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{businessData.name}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-primary text-primary-foreground">{businessData.industry}</Badge>
                    <Badge variant="outline">SaaS</Badge>
                    <Badge variant="outline">B2B</Badge>
                  </div>
                  <p className="text-muted-foreground">{businessData.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Founded</p>
                        <p className="text-sm text-muted-foreground">{businessData.founded}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Employees</p>
                        <p className="text-sm text-muted-foreground">{businessData.employees}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">{businessData.location}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Annual Revenue</p>
                        <p className="text-sm text-muted-foreground">{businessData.revenue}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">Asking Price</p>
                        <p className="text-sm text-muted-foreground">{businessData.askingPrice}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Financial Highlights */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle>Financial Highlights</CardTitle>
                <CardDescription>Key financial metrics and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">$2.5M</div>
                    <p className="text-sm text-muted-foreground">Annual Recurring Revenue</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">35%</div>
                    <p className="text-sm text-muted-foreground">Profit Margin</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">95%</div>
                    <p className="text-sm text-muted-foreground">Customer Retention</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Position */}
            <Card className="card-interactive">
              <CardHeader>
                <CardTitle>Market Position</CardTitle>
                <CardDescription>Industry standing and competitive advantages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Competitive Advantages</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Patent-pending automation technology</li>
                    <li>Exclusive partnerships with major enterprises</li>
                    <li>Best-in-class customer retention rates</li>
                    <li>Scalable SaaS platform with proven ROI</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Growth Opportunities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Expansion into European markets</li>
                    <li>AI-powered feature development</li>
                    <li>Strategic acquisition opportunities</li>
                    <li>Enterprise customer base growth</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;