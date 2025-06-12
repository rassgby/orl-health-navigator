
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const AuthButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Link to="/login">
        <Button variant="outline" className="flex items-center space-x-2">
          <LogIn className="h-4 w-4" />
          <span>Connexion</span>
        </Button>
      </Link>
      <Link to="/register">
        <Button className="flex items-center space-x-2">
          <UserPlus className="h-4 w-4" />
          <span>Inscription</span>
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
