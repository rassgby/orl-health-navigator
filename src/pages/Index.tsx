
import Header from "@/components/Header";
import DiagnosticForm from "@/components/DiagnosticForm";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Diagnostic ORL en ligne
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Évaluez vos symptômes ORL grâce à notre questionnaire interactif et obtenez 
            des recommandations personnalisées pour orienter votre prise en charge.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Évaluation fiable</h3>
              <p className="text-sm text-muted-foreground">
                Questionnaire basé sur les critères médicaux reconnus
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Résultat immédiat</h3>
              <p className="text-sm text-muted-foreground">
                Obtenez votre évaluation en quelques minutes seulement
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">Conseil personnalisé</h3>
              <p className="text-sm text-muted-foreground">
                Recommandations adaptées à votre situation
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Diagnostic Form */}
        <DiagnosticForm />

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <strong>Avertissement médical:</strong> Cette application est un outil d'aide au diagnostic 
            et ne remplace en aucun cas une consultation médicale professionnelle. En cas de symptômes 
            graves ou persistants, consultez immédiatement un médecin ORL ou votre médecin traitant.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
