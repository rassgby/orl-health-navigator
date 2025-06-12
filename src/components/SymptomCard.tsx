
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SymptomCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  selected: boolean;
  severity: number;
  onSelect: () => void;
  onSeverityChange: (severity: number) => void;
}

const SymptomCard = ({ 
  icon: Icon, 
  title, 
  description, 
  selected, 
  severity, 
  onSelect, 
  onSeverityChange 
}: SymptomCardProps) => {
  return (
    <Card className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
      selected ? 'ring-2 ring-primary border-primary' : 'border-border'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3" onClick={onSelect}>
          <div className={`p-2 rounded-lg ${
            selected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
          }`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={`w-5 h-5 rounded-full border-2 ${
            selected ? 'bg-primary border-primary' : 'border-muted-foreground'
          }`}>
            {selected && <div className="w-full h-full rounded-full bg-background scale-50"></div>}
          </div>
        </div>
        
        {selected && (
          <div className="mt-4 pt-4 border-t border-border">
            <label className="text-sm font-medium text-foreground">Intensité (1-5)</label>
            <div className="flex space-x-2 mt-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSeverityChange(level);
                  }}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    severity >= level 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground hover:bg-accent'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SymptomCard;
