import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, ArrowLeft, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SellerFormData {
  fullName: string;
  businessName: string;
  businessLogo: string;
  businessType: string;
  annualRevenue: string;
  askingPrice: string;
  desiredBuyerTraits: string[];
  businessDescription: string;
}

const SellerOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<SellerFormData>({
    fullName: "",
    businessName: "",
    businessLogo: "",
    businessType: "",
    annualRevenue: "",
    askingPrice: "",
    desiredBuyerTraits: [],
    businessDescription: ""
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const businessTypes = [
    "Technology/SaaS", "E-commerce", "Manufacturing", "Healthcare", "Retail",
    "Professional Services", "Real Estate", "Food & Beverage", "Construction",
    "Transportation", "Education", "Finance", "Hospitality", "Other"
  ];

  const revenueRanges = [
    "Under $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M - $50M",
    "$50M+"
  ];

  const buyerTraits = [
    "Experienced Owner",
    "Financially Qualified",
    "Local Buyer",
    "Strategic Acquirer",
    "First-time Buyer",
    "Private Equity",
    "Family Office",
    "Industry Expertise"
  ];

  const handleTraitToggle = (trait: string) => {
    setFormData(prev => ({
      ...prev,
      desiredBuyerTraits: prev.desiredBuyerTraits.includes(trait)
        ? prev.desiredBuyerTraits.filter(t => t !== trait)
        : [...prev.desiredBuyerTraits, trait]
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName.trim().length > 0 && formData.businessName.trim().length > 0;
      case 2:
        return formData.businessType.length > 0;
      case 3:
        return formData.annualRevenue.length > 0;
      case 4:
        return formData.askingPrice.length > 0;
      case 5:
        return formData.desiredBuyerTraits.length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Tell us about your business</h2>
              <p className="text-muted-foreground">Let's start with the basics</p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-border">
                  <AvatarFallback className="bg-primary-light text-primary text-xl">
                    <Building2 className="w-8 h-8" />
                  </AvatarFallback>
                </Avatar>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Your Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  placeholder="Your business or company name"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What type of business is it?</h2>
              <p className="text-muted-foreground">Select the category that best describes your business</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {businessTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFormData(prev => ({ ...prev, businessType: type }))}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.businessType === type
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="font-medium">{type}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Annual Revenue</h2>
              <p className="text-muted-foreground">This helps buyers understand the scale of your business</p>
            </div>
            
            <div className="space-y-3">
              {revenueRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setFormData(prev => ({ ...prev, annualRevenue: range }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.annualRevenue === range
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="font-medium text-lg">{range}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What's your asking price range?</h2>
              <p className="text-muted-foreground">Or enter a custom amount</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-3">
                {revenueRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setFormData(prev => ({ ...prev, askingPrice: range }))}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                      formData.askingPrice === range
                        ? "border-primary bg-primary-light text-primary"
                        : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                    }`}
                  >
                    <span className="font-medium text-lg">{range}</span>
                  </button>
                ))}
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              
              <div>
                <Label htmlFor="customPrice">Custom Amount</Label>
                <Input
                  id="customPrice"
                  value={formData.askingPrice.startsWith('$') ? formData.askingPrice : ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, askingPrice: e.target.value }))}
                  placeholder="e.g., $2,500,000"
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What type of buyer are you looking for?</h2>
              <p className="text-muted-foreground">Select all that apply</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {buyerTraits.map((trait) => (
                <button
                  key={trait}
                  onClick={() => handleTraitToggle(trait)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.desiredBuyerTraits.includes(trait)
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="font-medium">{trait}</span>
                </button>
              ))}
            </div>
            
            {formData.desiredBuyerTraits.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.desiredBuyerTraits.map((trait) => (
                  <Badge key={trait} variant="secondary" className="bg-primary text-primary-foreground">
                    {trait}
                  </Badge>
                ))}
              </div>
            )}

            <div>
              <Label htmlFor="businessDescription">Business Description (Optional)</Label>
              <Textarea
                id="businessDescription"
                value={formData.businessDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
                placeholder="Tell potential buyers about your business, its strengths, and what makes it special"
                className="mt-1 h-24"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl card-interactive">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          <Progress value={progress} className="mb-6" />
        </CardHeader>
        
        <CardContent>
          {renderStep()}
          
          <div className="flex justify-end mt-8">
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-primary flex items-center gap-2 px-6"
            >
              {currentStep === totalSteps ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Complete Setup
                </>
              ) : (
                <>
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SellerOnboarding;