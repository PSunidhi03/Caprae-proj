import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Building2,
  Handshake,
  MessageSquare,
  FileCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: "Smart Matching",
      description: "AI-powered matching connects sellers with qualified buyers based on industry, budget, and preferences."
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "End-to-end security with NDA management, document encryption, and verified user profiles."
    },
    {
      icon: TrendingUp,
      title: "Deal Analytics",
      description: "Financial document analysis and valuation tools to streamline the acquisition process."
    },
    {
      icon: MessageSquare,
      title: "Guided Communication",
      description: "Structured messaging and milestone tracking from initial contact to deal closure."
    }
  ];

  const processSteps = [
    {
      icon: Building2,
      title: "Create Your Profile",
      description: "Tell us about your business or investment criteria",
      time: "5 minutes"
    },
    {
      icon: Users,
      title: "Get Matched",
      description: "Our AI finds qualified buyers or sellers for you",
      time: "Instant"
    },
    {
      icon: Handshake,
      title: "Connect & Negotiate",
      description: "Secure messaging and document sharing",
      time: "2-8 weeks"
    },
    {
      icon: FileCheck,
      title: "Close the Deal",
      description: "Guided process with milestone tracking",
      time: "4-12 weeks"
    }
  ];

  const stats = [
    { number: "500+", label: "Businesses Sold" },
    { number: "$2.3B", label: "Total Deal Value" },
    { number: "89%", label: "Success Rate" },
    { number: "45", label: "Avg Days to Match" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Caprae</span>
                <span className="text-xl font-bold text-gradient ml-1">Capital</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate("/login")}>
                Sign In
              </Button>
              <Button className="btn-primary" onClick={() => navigate("/onboarding")}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary-light text-primary border-primary/20">
            Trusted by 500+ Business Owners
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Connect Business <span className="text-gradient">Sellers</span> with{" "}
            <span className="text-gradient">Qualified Buyers</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The modern platform that makes business acquisitions simple, secure, and successful. 
            Sellers initiate connections with pre-qualified buyers in a process that's professional yet approachable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-hero px-8 py-4 text-lg"
              onClick={() => navigate("/onboarding/seller")}
            >
              I'm Selling My Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg"
              onClick={() => navigate("/onboarding/buyer")}
            >
              I'm Looking to Buy
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Caprae Capital Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined process that takes the complexity out of business acquisitions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-interactive text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <Badge variant="secondary" className="bg-secondary-light text-secondary">
                    {step.time}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Caprae Capital?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for the modern business acquisition process with security and simplicity in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-profile">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Acquisition Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join hundreds of successful business owners who've found their perfect match on Caprae Capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="btn-hero px-8 py-4 text-lg"
              onClick={() => navigate("/onboarding")}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">Caprae</span>
                <span className="text-xl font-bold text-gradient ml-1">Capital</span>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Caprae Capital. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;