
import { useState, useEffect } from "react";
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
  LogOut,
  Users,
  Stethoscope,
  ClipboardList,
  UserCheck,
  Heart
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

// Menus pour les patients
const patientMenuItems = [
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
    title: "Mes rendez-vous",
    url: "/appointments",
    icon: Calendar,
  },
  {
    title: "Suivi médical",
    url: "/medical-history",
    icon: Heart,
  },
];

// Menus pour les médecins
const doctorMenuItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Patients",
    url: "/patients",
    icon: Users,
  },
  {
    title: "Diagnostics à valider",
    url: "/pending-diagnostics",
    icon: ClipboardList,
  },
  {
    title: "Consultations",
    url: "/consultations",
    icon: Stethoscope,
  },
  {
    title: "Planning",
    url: "/schedule",
    icon: Calendar,
  },
  {
    title: "Statistiques",
    url: "/stats",
    icon: TrendingUp,
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
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);

  const handleLogout = () => {
    console.log("Déconnexion");
    localStorage.removeItem("userType");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  const isDoctor = userInfo?.userType === "doctor";
  const menuItems = isDoctor ? doctorMenuItems : patientMenuItems;

  return (
    <Sidebar className="border-r border-border bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center space-x-3 px-4 py-6">
          <div className={`p-2 rounded-lg ${isDoctor ? 'bg-green-600' : 'bg-primary'} text-white`}>
            {isDoctor ? <Stethoscope className="h-6 w-6" /> : <Hospital className="h-6 w-6" />}
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">DiagnosticORL</h1>
            <p className="text-xs text-sidebar-foreground/60">
              {isDoctor ? "Espace Médecin" : "Espace Patient"}
            </p>
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
              {menuItems.map((item) => (
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
            <div className={`p-2 rounded-full ${isDoctor ? 'bg-green-600' : 'bg-primary'} text-white`}>
              {isDoctor ? <UserCheck className="h-4 w-4" /> : <User className="h-4 w-4" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                {userInfo ? `${isDoctor ? 'Dr. ' : ''}${userInfo.firstName} ${userInfo.lastName}` : 'Utilisateur'}
              </p>
              <p className="text-xs text-sidebar-foreground/60 truncate">
                {userInfo?.email || 'email@exemple.com'}
              </p>
              {isDoctor && userInfo?.speciality && (
                <p className="text-xs text-green-600 font-medium">{userInfo.speciality}</p>
              )}
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
