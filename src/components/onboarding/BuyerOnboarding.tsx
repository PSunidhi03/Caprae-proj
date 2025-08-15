import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Upload, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BuyerFormData {
  fullName: string;
  company: string;
  profilePhoto: string;
  industries: string[];
  budgetRange: string;
  location: string;
  timeline: string;
  bio: string;
}

const BuyerOnboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BuyerFormData>({
    fullName: "",
    company: "",
    profilePhoto: "",
    industries: [],
    budgetRange: "",
    location: "",
    timeline: "",
    bio: ""
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const industries = [
    "Technology", "Manufacturing", "Healthcare", "Retail", "Hospitality",
    "Professional Services", "Real Estate", "Food & Beverage", "Construction",
    "Transportation", "Education", "Finance"
  ];

  const budgetRanges = [
    "Under $500K",
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "$10M+"
  ];

  const timelines = [
    "Immediate (0-3 months)",
    "Short-term (3-6 months)",
    "Medium-term (6-12 months)",
    "Long-term (12+ months)"
  ];

  const handleIndustryToggle = (industry: string) => {
    setFormData(prev => ({
      ...prev,
      industries: prev.industries.includes(industry)
        ? prev.industries.filter(i => i !== industry)
        : [...prev.industries, industry]
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
        return formData.fullName.trim().length > 0;
      case 2:
        return formData.industries.length > 0;
      case 3:
        return formData.budgetRange.length > 0;
      case 4:
        return formData.location.trim().length > 0;
      case 5:
        return formData.timeline.length > 0;
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
              <h2 className="text-2xl font-bold text-foreground">Let's get started!</h2>
              <p className="text-muted-foreground">Tell us about yourself to create your buyer profile</p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-border">
                  <AvatarFallback className="bg-primary-light text-primary text-xl">
                    {formData.fullName.charAt(0) || "?"}
                  </AvatarFallback>
                </Avatar>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors">
                  <Upload className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="company">Company (Optional)</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Current company or investment firm"
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
              <h2 className="text-2xl font-bold text-foreground">What industries interest you?</h2>
              <p className="text-muted-foreground">Select all that apply - you can change this later</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => handleIndustryToggle(industry)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.industries.includes(industry)
                      ? "border-primary bg-primary-light text-primary-foreground"
                      : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="font-medium">{industry}</span>
                </button>
              ))}
            </div>
            
            {formData.industries.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData.industries.map((industry) => (
                  <Badge key={industry} variant="secondary" className="bg-primary text-primary-foreground">
                    {industry}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What's your budget range?</h2>
              <p className="text-muted-foreground">This helps us match you with suitable opportunities</p>
            </div>
            
            <div className="space-y-3">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setFormData(prev => ({ ...prev, budgetRange: range }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.budgetRange === range
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
              <h2 className="text-2xl font-bold text-foreground">Where are you looking?</h2>
              <p className="text-muted-foreground">Preferred location for acquisitions</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., San Francisco, CA or Remote"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="bio">Tell us about your acquisition goals (Optional)</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                  placeholder="What type of businesses are you looking to acquire? Any specific criteria?"
                  className="mt-1 h-24"
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 fade-in">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">What's your timeline?</h2>
              <p className="text-muted-foreground">When are you looking to complete an acquisition?</p>
            </div>
            
            <div className="space-y-3">
              {timelines.map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => setFormData(prev => ({ ...prev, timeline }))}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    formData.timeline === timeline
                      ? "border-primary bg-primary-light text-primary"
                      : "border-border hover:border-primary/50 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="font-medium text-lg">{timeline}</span>
                </button>
              ))}
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

export default BuyerOnboarding;