
import { Hospital, Stethoscope } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Hospital className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">DiagnosticORL</h1>
              <p className="text-sm text-muted-foreground">Diagnostic ORL en ligne</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Stethoscope className="h-5 w-5" />
            <span className="text-sm">Consultation médicale recommandée</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
