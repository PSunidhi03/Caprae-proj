import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, DollarSign, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnboardingSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-3xl font-bold text-foreground">Caprae</span>
              <span className="text-3xl font-bold text-gradient ml-1">Capital</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Caprae Capital
          </h1>
          <p className="text-xl text-muted-foreground">
            Let's get you set up with the right account type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seller Card */}
          <Card className="card-profile hover:scale-105 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Building2 className="w-10 h-10 text-primary group-hover:text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                I'm Selling My Business
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Connect with pre-qualified buyers who are actively looking to acquire businesses like yours.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Browse qualified buyer profiles</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Initiate connections on your terms</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Secure document sharing and communication</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Guided deal process and milestone tracking</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full btn-primary mt-6"
                onClick={() => navigate("/onboarding/seller")}
              >
                Get Started as Seller
              </Button>
            </CardContent>
          </Card>

          {/* Buyer Card */}
          <Card className="card-profile hover:scale-105 transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-secondary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-secondary group-hover:text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">
                I'm Looking to Buy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-center">
                Discover acquisition opportunities that match your investment criteria and budget range.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>AI-powered business matching</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Access to vetted business listings</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Direct communication with sellers</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>Financial analysis and valuation tools</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full btn-secondary mt-6"
                onClick={() => navigate("/onboarding/buyer")}
              >
                Get Started as Buyer
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <button 
              onClick={() => navigate("/login")}
              className="text-primary hover:text-primary-hover font-medium underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnboardingSelection;