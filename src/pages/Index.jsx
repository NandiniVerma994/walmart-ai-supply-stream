import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Package,
  RotateCcw,
  BarChart3,
  TrendingUp,
  Truck,
  Zap,
  Home,
  Users,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  // Separate state for login form
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Separate state for signup form
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const roleRedirectMap = {
    supplier: "/supplier-dashboard",
    manager: "/walmart-store-manager-dashboard",
    dispatcher: "/delivery-dispatcher-dashboard",
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    // Reset forms when dialog closes
    setLoginForm({ email: "", password: "", role: "" });
    setSignupForm({ name: "", email: "", password: "", role: "" });
    setActiveTab("login");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginForm.email || !loginForm.password || !loginForm.role) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Logging in with:", loginForm);

    // Close dialog
    setIsDialogOpen(false);

    // Navigate to appropriate dashboard
    const redirectPath = roleRedirectMap[loginForm.role];
    if (redirectPath) {
      navigate(redirectPath);
    }

    // Reset form
    setLoginForm({ email: "", password: "", role: "" });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      !signupForm.name ||
      !signupForm.email ||
      !signupForm.password ||
      !signupForm.role
    ) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Creating account with:", signupForm);

    // Close dialog
    setIsDialogOpen(false);

    // Navigate to appropriate dashboard
    const redirectPath = roleRedirectMap[signupForm.role];
    if (redirectPath) {
      navigate(redirectPath);
    }

    // Reset form
    setSignupForm({ name: "", email: "", password: "", role: "" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900">
      {/* Navbar */}
      <nav className="bg-slate-900/95 backdrop-blur-sm border-b border-teal-600/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between relative">
            {/* Logo and Title (left) */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">W</span>
              </div>
              <span className="text-white font-semibold text-xl">
                OptiChain
              </span>
            </div>
            {/* Centered Nav Links */}
            <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#home"
                className="text-teal-100 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-teal-100 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-teal-100 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-teal-100 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Revolutionizing Walmart's Supply Chain with AI
          </h1>
          <h2 className="text-2xl md:text-2xl text-teal-100 mb-8 font-medium">
            Inventory, Delivery, Returns, Smarter than ever.
          </h2>
          <p className="text-xl text-teal-50 mb-12 max-w-4xl mx-auto leading-relaxed">
            An intelligent dashboard built for Walmart. Suppliers, managers, and
            dispatchers can simulate, predict, and optimize operations with
            cutting-edge AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-800 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={handleDialogOpen}
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-800 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={scrollToFeatures}
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* About Walmart / Sparkathon */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why Walmart?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Walmart is one of the world's largest retailers, serving millions
              of customers daily. A fast, efficient supply chain is critical for
              maintaining customer satisfaction and operational excellence. This
              project helps streamline operations through real-time AI-driven
              tools, enabling better decision-making, reduced costs, and
              improved customer experiences across the entire supply chain
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600">
              AI-driven tools to optimize every aspect of your supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inventory Simulator",
                description: "Predict results before moving stock",
                icon: Package,
                color: "bg-blue-500",
              },
              {
                title: "Returns Intelligence",
                description: "Estimate return chances and plan reverse routes",
                icon: RotateCcw,
                color: "bg-red-500",
              },
              {
                title: "Supplier Scoreboard",
                description: "Rate suppliers and detect delays",
                icon: BarChart3,
                color: "bg-green-500",
              },
              {
                title: "ShopTrends",
                description: "Forecast product demand from social signals",
                icon: TrendingUp,
                color: "bg-purple-500",
              },
              {
                title: "SmartDropSync",
                description: "Schedule delivery docks and avoid congestion",
                icon: Truck,
                color: "bg-orange-500",
              },
              {
                title: "LoadSwap",
                description: "Rebalance delivery van loads in real time",
                icon: Zap,
                color: "bg-yellow-500",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white via-gray-50 to-white hover:from-teal-50 hover:via-white hover:to-emerald-50 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>
                  <CardHeader className="relative z-10">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                    >
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-teal-700 transition-colors duration-300 group-hover:translate-x-1">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-1">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to transform your supply chain operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "User logs in based on role",
                description:
                  "Choose your role as Supplier, Store Manager, or Delivery Dispatcher",
                icon: Users,
              },
              {
                step: "2",
                title: "Runs simulations or views dashboards",
                description:
                  "Access role-specific tools and real-time analytics",
                icon: Target,
              },
              {
                step: "3",
                title: "Takes action using smart suggestions",
                description:
                  "Implement AI-powered recommendations to optimize operations",
                icon: CheckCircle,
              },
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-teal-100 text-teal-800 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Role-Based Access */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Role-Based Access
            </h2>
            <p className="text-xl text-gray-600">
              Tailored dashboards for every user type
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                role: "Supplier",
                access: [
                  "Supplier Scoreboard",
                  "SmartDropSync",
                  "Returns Intelligence",
                ],
                color: "bg-blue-500",
                icon: Package,
              },
              {
                role: "Walmart Store Manager",
                access: [
                  "Inventory Simulator",
                  "Returns Intelligence",
                  "ShopTrends",
                  "Supplier Scoreboard (Read-only)",
                ],
                color: "bg-green-500",
                icon: Home,
              },
              {
                role: "Delivery Dispatcher",
                access: ["LoadSwap", "SmartDropSync"],
                color: "bg-purple-500",
                icon: Truck,
              },
            ].map((roleData, index) => {
              const IconComponent = roleData.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white via-gray-50 to-white hover:from-blue-50 hover:via-white hover:to-purple-50 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
                  <CardHeader className="relative z-10">
                    <div
                      className={`w-12 h-12 ${roleData.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                    >
                      <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-teal-700 transition-colors duration-300 group-hover:translate-x-1">
                      {roleData.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="space-y-2">
                      <p className="font-medium text-gray-700 mb-3 group-hover:translate-x-1 transition-transform duration-300">
                        Can Access:
                      </p>
                      <ul className="space-y-2">
                        {roleData.access.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300"
                            style={{ transitionDelay: `${idx * 50}ms` }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our AI-powered tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white via-gray-50 to-white hover:from-yellow-50 hover:via-white hover:to-orange-50 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300">
                  "SmartDropSync helped us reduce dock wait time by 25%! The AI
                  predictions are incredibly accurate."
                </blockquote>
                <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-semibold">SA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Supplier A</p>
                    <p className="text-sm text-gray-600">Regional Supplier</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white via-gray-50 to-white hover:from-yellow-50 hover:via-white hover:to-orange-50 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12"></div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 mb-4 group-hover:text-gray-800 group-hover:translate-x-1 transition-all duration-300">
                  "Inventory Simulator caught a potential stockout 2 weeks
                  early. Saved us thousands in lost sales!"
                </blockquote>
                <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Store Manager</p>
                    <p className="text-sm text-gray-600">Walmart Supercenter</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900 text-teal-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform Walmart's supply chain?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get started by choosing your role and logging in. Experience the
            future of supply chain management today.
          </p>
        </div>
      </section>

      {/* Login/Signup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900 border-teal-600/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white">
              Welcome to OptiChain
            </DialogTitle>
            <DialogDescription className="text-center text-teal-100">
              Access your supply chain dashboard
            </DialogDescription>
          </DialogHeader>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="space-y-4 mt-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-teal-100">
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginForm.email}
                    onChange={(e) =>
                      setLoginForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-slate-800/50 border-teal-600/30 text-white placeholder:text-teal-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-teal-100">
                    Password
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginForm.password}
                    onChange={(e) =>
                      setLoginForm((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="bg-slate-800/50 border-teal-600/30 text-white placeholder:text-teal-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-role" className="text-teal-100">
                    Role
                  </Label>
                  <Select
                    value={loginForm.role}
                    onValueChange={(value) =>
                      setLoginForm((prev) => ({ ...prev, role: value }))
                    }
                  >
                    <SelectTrigger className="bg-slate-800/50 border-teal-600/30 text-white">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-teal-600/30">
                      <SelectItem
                        value="supplier"
                        className="text-white hover:bg-teal-600"
                      >
                        Supplier
                      </SelectItem>
                      <SelectItem
                        value="manager"
                        className="text-white hover:bg-teal-600"
                      >
                        Walmart Store Manager
                      </SelectItem>
                      <SelectItem
                        value="dispatcher"
                        className="text-white hover:bg-teal-600"
                      >
                        Delivery Dispatcher
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4 mt-6">
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-teal-100">
                    Full Name
                  </Label>
                  <Input
                    id="signup-name"
                    placeholder="Enter your full name"
                    value={signupForm.name}
                    onChange={(e) =>
                      setSignupForm((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    className="bg-slate-800/50 border-teal-600/30 text-white placeholder:text-teal-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-teal-100">
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="Enter your email"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-slate-800/50 border-teal-600/30 text-white placeholder:text-teal-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-teal-100">
                    Password
                  </Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a password"
                    value={signupForm.password}
                    onChange={(e) =>
                      setSignupForm((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="bg-slate-800/50 border-teal-600/30 text-white placeholder:text-teal-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-role" className="text-teal-100">
                    Role
                  </Label>
                  <Select
                    value={signupForm.role}
                    onValueChange={(value) =>
                      setSignupForm((prev) => ({ ...prev, role: value }))
                    }
                  >
                    <SelectTrigger className="bg-slate-800/50 border-teal-600/30 text-white">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-teal-600/30">
                      <SelectItem
                        value="supplier"
                        className="text-white hover:bg-teal-600"
                      >
                        Supplier
                      </SelectItem>
                      <SelectItem
                        value="manager"
                        className="text-white hover:bg-teal-600"
                      >
                        Walmart Store Manager
                      </SelectItem>
                      <SelectItem
                        value="dispatcher"
                        className="text-white hover:bg-teal-600"
                      >
                        Delivery Dispatcher
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Create Account
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  );
}
