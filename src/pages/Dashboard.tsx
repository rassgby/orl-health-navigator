
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hospital, User, FileText, Calendar, Settings, LogOut, LayoutDashboard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Simulation de déconnexion
    console.log("Déconnexion");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Hospital className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">DiagnosticORL</h1>
                <p className="text-sm text-muted-foreground">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Bienvenue, Jean Dupont</span>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Tableau de bord</h2>
          <p className="text-muted-foreground">Gérez vos diagnostics et consultez vos résultats</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Diagnostics réalisés</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 depuis le mois dernier</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dernière consultation</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Il y a 2 jours</div>
              <p className="text-xs text-muted-foreground">Diagnostic ORL complet</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Profil</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Complet</div>
              <p className="text-xs text-muted-foreground">100% des informations renseignées</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LayoutDashboard className="h-5 w-5" />
                <span>Nouveau diagnostic</span>
              </CardTitle>
              <CardDescription>
                Commencez un nouveau diagnostic ORL en répondant à notre questionnaire
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/">
                <Button className="w-full">Démarrer un diagnostic</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Mes diagnostics</span>
              </CardTitle>
              <CardDescription>
                Consultez l'historique de vos diagnostics précédents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Voir l'historique</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Mon profil</span>
              </CardTitle>
              <CardDescription>
                Gérez vos informations personnelles et préférences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Modifier le profil</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Paramètres</span>
              </CardTitle>
              <CardDescription>
                Configurez vos préférences et paramètres de notification
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Ouvrir les paramètres</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
