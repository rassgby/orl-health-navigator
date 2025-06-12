
import { useState } from "react";
import { Ear, EarOff, Thermometer, ThermometerSun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SymptomCard from "./SymptomCard";
import ResultCard from "./ResultCard";

interface Symptom {
  id: string;
  title: string;
  description: string;
  icon: any;
}

interface SelectedSymptom {
  id: string;
  title: string;
  severity: number;
}

const DiagnosticForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
  const [showResults, setShowResults] = useState(false);

  const symptoms: Symptom[] = [
    {
      id: 'ear-pain',
      title: 'Douleur à l\'oreille',
      description: 'Douleur, sensation de pression ou d\'inconfort dans l\'oreille',
      icon: Ear
    },
    {
      id: 'hearing-loss',
      title: 'Perte d\'audition',
      description: 'Diminution de l\'acuité auditive, sensation d\'oreille bouchée',
      icon: EarOff
    },
    {
      id: 'fever',
      title: 'Fièvre',
      description: 'Température corporelle élevée, frissons, malaise général',
      icon: Thermometer
    },
    {
      id: 'throat-pain',
      title: 'Mal de gorge',
      description: 'Douleur lors de la déglutition, gorge irritée ou enflammée',
      icon: ThermometerSun
    },
    {
      id: 'nasal-congestion',
      title: 'Congestion nasale',
      description: 'Nez bouché, difficulté à respirer par le nez, écoulement',
      icon: Ear
    }
  ];

  const isSelected = (symptomId: string) => {
    return selectedSymptoms.some(s => s.id === symptomId);
  };

  const getSeverity = (symptomId: string) => {
    const symptom = selectedSymptoms.find(s => s.id === symptomId);
    return symptom?.severity || 1;
  };

  const toggleSymptom = (symptomId: string, title: string) => {
    if (isSelected(symptomId)) {
      setSelectedSymptoms(prev => prev.filter(s => s.id !== symptomId));
    } else {
      setSelectedSymptoms(prev => [...prev, { id: symptomId, title, severity: 1 }]);
    }
  };

  const updateSeverity = (symptomId: string, severity: number) => {
    setSelectedSymptoms(prev => 
      prev.map(s => s.id === symptomId ? { ...s, severity } : s)
    );
  };

  const calculateScore = () => {
    return selectedSymptoms.reduce((total, symptom) => total + symptom.severity, 0);
  };

  const handleDiagnose = () => {
    console.log('Diagnostic lancé avec les symptômes:', selectedSymptoms);
    setShowResults(true);
  };

  const resetForm = () => {
    setSelectedSymptoms([]);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 text-center">
          <Button variant="outline" onClick={resetForm}>
            Nouveau diagnostic
          </Button>
        </div>
        <ResultCard 
          score={calculateScore()} 
          selectedSymptoms={selectedSymptoms.map(s => s.title)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Questionnaire de diagnostic ORL</CardTitle>
          <p className="text-muted-foreground">
            Sélectionnez vos symptômes et évaluez leur intensité pour obtenir une évaluation préliminaire
          </p>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 mb-8">
        {symptoms.map((symptom) => (
          <SymptomCard
            key={symptom.id}
            icon={symptom.icon}
            title={symptom.title}
            description={symptom.description}
            selected={isSelected(symptom.id)}
            severity={getSeverity(symptom.id)}
            onSelect={() => toggleSymptom(symptom.id, symptom.title)}
            onSeverityChange={(severity) => updateSeverity(symptom.id, severity)}
          />
        ))}
      </div>

      <div className="text-center">
        <Button 
          onClick={handleDiagnose}
          disabled={selectedSymptoms.length === 0}
          size="lg"
          className="px-8"
        >
          Obtenir le diagnostic ({selectedSymptoms.length} symptôme{selectedSymptoms.length !== 1 ? 's' : ''} sélectionné{selectedSymptoms.length !== 1 ? 's' : ''})
        </Button>
        {selectedSymptoms.length === 0 && (
          <p className="text-sm text-muted-foreground mt-2">
            Veuillez sélectionner au moins un symptôme
          </p>
        )}
      </div>
    </div>
  );
};

export default DiagnosticForm;
