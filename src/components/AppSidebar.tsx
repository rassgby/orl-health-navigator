
import { useState } from "react";
import { 
  Hospital, 
  LayoutDashboard, 
  FileText, 
  User, 
  Settings, 
  Calendar,
  TrendingUp,
  Bell,
  HelpCircle,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainMenuItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Nouveau diagnostic",
    url: "/",
    icon: Hospital,
  },
  {
    title: "Mes diagnostics",
    url: "/diagnostics",
    icon: FileText,
  },
  {
    title: "Statistiques",
    url: "/stats",
    icon: TrendingUp,
  },
  {
    title: "Rendez-vous",
    url: "/appointments",
    icon: Calendar,
  },
];

const accountMenuItems = [
  {
    title: "Mon profil",
    url: "/profile",
    icon: User,
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Aide",
    url: "/help",
    icon: HelpCircle,
  },
];

export function AppSidebar() {
  const location = useLocation();

  const handleLogout = () => {
    console.log("Déconnexion");
    window.location.href = "/";
  };

  return (
    <Sidebar className="border-r border-border bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-3 px-4 py-6">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Hospital className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">DiagnosticORL</h1>
            <p className="text-xs text-sidebar-foreground/60">Plateforme médicale</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <Link to={item.url} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/70 font-semibold">
            Compte
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                  >
                    <Link to={item.url} className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-4 p-3 bg-sidebar-accent rounded-lg">
            <div className="bg-primary text-primary-foreground p-2 rounded-full">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">Jean Dupont</p>
              <p className="text-xs text-sidebar-foreground/60 truncate">jean.dupont@email.com</p>
            </div>
          </div>
          <Button 
            onClick={handleLogout} 
            variant="outline" 
            size="sm" 
            className="w-full bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Déconnexion
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
