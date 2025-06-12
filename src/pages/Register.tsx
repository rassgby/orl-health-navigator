
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Hospital, Eye, EyeOff, Mail, Lock, User, Stethoscope, Heart } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "patient" as "patient" | "doctor",
    speciality: "",
    licenseNumber: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    if (formData.userType === "doctor" && (!formData.speciality || !formData.licenseNumber)) {
      alert("Veuillez remplir tous les champs requis pour les médecins");
      return;
    }

    setIsLoading(true);
    
    // Simulation d'inscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Inscription avec:", formData);
    
    // Stocker le type d'utilisateur pour le dashboard
    localStorage.setItem("userType", formData.userType);
    localStorage.setItem("userInfo", JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      userType: formData.userType,
      speciality: formData.speciality
    }));
    
    navigate("/dashboard");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 py-8">
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
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Inscription
            </CardTitle>
            <CardDescription className="text-base">
              Créez votre compte pour accéder à la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type d'utilisateur */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Type de compte</Label>
                <RadioGroup 
                  value={formData.userType} 
                  onValueChange={(value) => handleChange("userType", value)}
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium">Prénom</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Jean"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className="pl-10 h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-primary transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium">Nom</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Dupont"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="pl-10 h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-primary transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Champs spécifiques aux médecins */}
              {formData.userType === "doctor" && (
                <div className="space-y-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-medium text-green-900">Informations professionnelles</h4>
                  <div className="space-y-2">
                    <Label htmlFor="speciality" className="text-sm font-medium">Spécialité</Label>
                    <Input
                      id="speciality"
                      type="text"
                      placeholder="ORL, Médecine générale..."
                      value={formData.speciality}
                      onChange={(e) => handleChange("speciality", e.target.value)}
                      className="h-12 bg-white border-green-200 focus:border-green-500 focus:ring-green-500"
                      required={formData.userType === "doctor"}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseNumber" className="text-sm font-medium">Numéro d'ordre</Label>
                    <Input
                      id="licenseNumber"
                      type="text"
                      placeholder="123456789"
                      value={formData.licenseNumber}
                      onChange={(e) => handleChange("licenseNumber", e.target.value)}
                      className="h-12 bg-white border-green-200 focus:border-green-500 focus:ring-green-500"
                      required={formData.userType === "doctor"}
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
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
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
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

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                    className="pl-10 pr-10 h-12 bg-white/50 border-gray-200 focus:border-primary focus:ring-primary transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Inscription...</span>
                  </div>
                ) : (
                  "Créer mon compte"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Déjà un compte ?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium hover:underline transition-all duration-200">
                  Se connecter
                </Link>
              </p>
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

export default Register;
