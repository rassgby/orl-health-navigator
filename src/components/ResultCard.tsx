
import { AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ResultCardProps {
  score: number;
  selectedSymptoms: string[];
}

const ResultCard = ({ score, selectedSymptoms }: ResultCardProps) => {
  const getSeverityLevel = (score: number) => {
    if (score <= 5) return { level: 'Léger', color: 'text-green-600', icon: CheckCircle };
    if (score <= 10) return { level: 'Modéré', color: 'text-yellow-600', icon: Info };
    return { level: 'Sévère', color: 'text-red-600', icon: AlertTriangle };
  };

  const getRecommendations = (score: number) => {
    if (score <= 5) {
      return [
        "Surveillez l'évolution des symptômes",
        "Maintenez une bonne hydratation",
        "Repos vocal si nécessaire",
        "Consultation si aggravation"
      ];
    }
    if (score <= 10) {
      return [
        "Consultation médicale recommandée dans les 48h",
        "Évitez les irritants (fumée, poussière)",
        "Hydratation importante",
        "Repos vocal"
      ];
    }
    return [
      "Consultation médicale urgente recommandée",
      "Contactez votre médecin rapidement",
      "Surveillez les signes d'aggravation",
      "Ne tardez pas à consulter"
    ];
  };

  const { level, color, icon: Icon } = getSeverityLevel(score);
  const recommendations = getRecommendations(score);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon className={`h-5 w-5 ${color}`} />
            <span>Résultat du diagnostic</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-4">
            <div className="text-3xl font-bold mb-2">Score: {score}/25</div>
            <div className={`text-lg font-medium ${color}`}>Niveau {level}</div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2">Symptômes sélectionnés:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedSymptoms.map((symptom, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {symptom}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recommandations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> Ce diagnostic est indicatif et ne remplace pas une consultation médicale professionnelle. 
          En cas de doute ou de symptômes persistants, consultez un médecin ORL.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default ResultCard;
