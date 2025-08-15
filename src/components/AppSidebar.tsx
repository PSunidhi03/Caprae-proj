import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  CheckSquare, 
  FileText, 
  User, 
  Settings,
  Building2,
  LogOut
} from "lucide-react";

const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const currentPath = location.pathname;

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Matches", path: "/matches", badge: "3" },
    { icon: MessageSquare, label: "Messages", path: "/messages", badge: "5" },
    { icon: CheckSquare, label: "Tasks", path: "/tasks" },
    { icon: FileText, label: "Documents", path: "/documents" },
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium" : "hover:bg-sidebar-accent/50";

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account.",
    });
    navigate("/signin");
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-6 border-b border-sidebar-border">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">Caprae</h1>
              <p className="text-sm text-sidebar-foreground/70">Capital</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.path} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!collapsed && (
                        <>
                          <span>{item.label}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {/* User Profile */}
        <div className={`flex items-center ${collapsed ? 'justify-center' : 'space-x-3 p-3 rounded-lg hover:bg-sidebar-accent transition-all duration-200 cursor-pointer'}`}>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              JD
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                Anne Smith              </p>
              <p className="text-xs text-sidebar-foreground/70 truncate">
                Seller Account
              </p>
            </div>
          )}
        </div>
        
        {/* Logout Button */}
        <Button
          variant="ghost"
          onClick={handleLogout}
          className={`w-full ${collapsed ? 'px-2' : 'justify-start'} text-sidebar-foreground hover:bg-sidebar-accent`}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span className="ml-2">Log out</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;