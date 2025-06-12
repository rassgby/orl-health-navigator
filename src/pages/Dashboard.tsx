
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Hospital, 
  FileText, 
  Calendar, 
  User, 
  TrendingUp, 
  Activity,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <div className="h-6 w-px bg-border mx-2" />
              <div>
                <h1 className="text-lg font-semibold text-foreground">Tableau de bord</h1>
                <p className="text-sm text-muted-foreground">Bienvenue, Jean Dupont</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 space-y-6 p-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-primary">Nouveau diagnostic</CardTitle>
                  <Plus className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <Link to="/">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Commencer
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">Mes diagnostics</CardTitle>
                  <FileText className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                    Consulter
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-600">Rendez-vous</CardTitle>
                  <Calendar className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-green-200 text-green-600 hover:bg-green-50">
                    Planifier
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-600">Mon profil</CardTitle>
                  <User className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                    Modifier
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Diagnostics réalisés</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">3</div>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                    +1 depuis le mois dernier
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Dernière consultation</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">Il y a 2 jours</div>
                  <p className="text-xs text-muted-foreground">Diagnostic ORL complet</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profil</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">Complet</div>
                  <p className="text-xs text-muted-foreground">100% des informations renseignées</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Prochaine consultation</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">Dans 5 jours</div>
                  <p className="text-xs text-muted-foreground">Dr. Martin - Contrôle</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>Activité récente</span>
                  </CardTitle>
                  <CardDescription>
                    Vos dernières actions sur la plateforme
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="bg-primary text-primary-foreground p-2 rounded-full">
                      <Hospital className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Diagnostic ORL terminé</p>
                      <p className="text-xs text-muted-foreground">Il y a 2 jours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Profil mis à jour</p>
                      <p className="text-xs text-muted-foreground">Il y a 1 semaine</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">RDV programmé</p>
                      <p className="text-xs text-muted-foreground">Il y a 2 semaines</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Recommandations</span>
                  </CardTitle>
                  <CardDescription>
                    Conseils personnalisés pour votre suivi
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Suivi recommandé</h4>
                    <p className="text-sm text-blue-700">
                      Votre dernier diagnostic suggère un contrôle dans 3 mois.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Prévention</h4>
                    <p className="text-sm text-green-700">
                      Pensez à maintenir une bonne hygiène nasale quotidienne.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Attention</h4>
                    <p className="text-sm text-orange-700">
                      Consultez rapidement si les symptômes s'aggravent.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
