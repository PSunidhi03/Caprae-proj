import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  DollarSign, 
  Clock, 
  Building2, 
  Heart, 
  X, 
  MessageSquare,
  TrendingUp 
} from "lucide-react";

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

interface BuyerCardProps {
  buyer: Buyer;
  onAccept: (buyerId: string) => void;
  onReject: (buyerId: string) => void;
  onViewProfile: (buyerId: string) => void;
}

const BuyerCard = ({ buyer, onAccept, onReject, onViewProfile }: BuyerCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready to Buy":
        return "bg-success text-success-foreground";
      case "Research Phase":
        return "bg-warning text-warning-foreground";
      case "Active Negotiations":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="card-profile hover:scale-105 transition-all duration-300 cursor-pointer group">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16 border-2 border-primary-light">
              <AvatarImage src={buyer.avatar} />
              <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                {getInitials(buyer.name)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {buyer.name}
              </h3>
              {buyer.company && (
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {buyer.company}
                </p>
              )}
              <Badge className={`mt-2 ${getStatusColor(buyer.status)}`}>
                {buyer.status}
              </Badge>
            </div>
          </div>
        </div>

        {/* Budget & Location */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="font-medium">{buyer.budgetRange}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">{buyer.location}</span>
          </div>
        </div>

        {/* Timeline & Experience */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">{buyer.timeline}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <TrendingUp className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">{buyer.previousAcquisitions} prev. deals</span>
          </div>
        </div>

        {/* Industries */}
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Interested Industries:</p>
          <div className="flex flex-wrap gap-1">
            {buyer.industries.slice(0, 3).map((industry) => (
              <Badge key={industry} variant="outline" className="text-xs">
                {industry}
              </Badge>
            ))}
            {buyer.industries.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{buyer.industries.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Bio Preview */}
        {buyer.bio && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {buyer.bio}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onReject(buyer.id)}
            className="text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewProfile(buyer.id)}
            className="flex items-center gap-1"
          >
            <MessageSquare className="w-4 h-4" />
            Details
          </Button>
          
          <Button
            size="sm"
            onClick={() => onAccept(buyer.id)}
            className="btn-primary flex items-center gap-1"
          >
            <Heart className="w-4 h-4" />
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuyerCard;