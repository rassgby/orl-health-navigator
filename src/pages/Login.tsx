
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Hospital, Eye, EyeOff, Mail, Lock, Stethoscope, Heart } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation de connexion
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Connexion avec:", { email, password, userType });
    
    // Stocker le type d'utilisateur pour le dashboard
    localStorage.setItem("userType", userType);
    localStorage.setItem("userInfo", JSON.stringify({
      firstName: userType === "doctor" ? "Dr. Jean" : "Jean",
      lastName: "Dupont",
      email: email,
      userType: userType,
      speciality: userType === "doctor" ? "ORL" : undefined
    }));
    
    navigate("/dashboard");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo animé */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="bg-primary text-primary-foreground p-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Hospital className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">DiagnosticORL</h1>
              <p className="text-sm text-muted-foreground">Plateforme médicale collaborative</p>
            </div>
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 animate-scale-in">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Connexion
            </CardTitle>
            <CardDescription className="text-base">
              Connectez-vous à votre compte pour accéder à la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type d'utilisateur */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Type de compte</Label>
                <RadioGroup 
                  value={userType} 
                  onValueChange={(value) => setUserType(value as "patient" | "doctor")}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                    <RadioGroupItem value="patient" id="patient" />
                    <Label htmlFor="patient" className="flex items-center space-x-2 cursor-pointer">
                      <Heart className="h-4 w-4 text-blue-600" />
                      <span>Patient</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-green-50 transition-colors cursor-pointer">
                    <RadioGroupItem value="doctor" id="doctor" />
                    <Label htmlFor="doctor" className="flex items-center space-x-2 cursor-pointer">
                      <Stethoscope className="h-4 w-4 text-green-600" />
                      <span>Médecin</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-primary transition-all duration-200"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-primary transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Connexion...</span>
                  </div>
                ) : (
                  "Se connecter"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Pas encore de compte ?{" "}
                <Link to="/register" className="text-primary hover:text-primary/80 font-medium hover:underline transition-all duration-200">
                  Créer un compte
                </Link>
              </p>
              <Link to="#" className="text-xs text-muted-foreground hover:text-primary transition-colors mt-2 inline-block">
                Mot de passe oublié ?
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary hover:underline transition-all duration-200">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
