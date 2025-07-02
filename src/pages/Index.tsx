
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const modules = [
    {
      title: "Inventory Simulator",
      description: "Test inventory decisions before they happen with AI-powered simulations",
      icon: "📦",
      path: "/inventory-simulator",
      color: "bg-teal-600"
    },
    {
      title: "Returns Radar",
      description: "Predict returns and optimize reverse logistics pathways",
      icon: "🔁",
      path: "/returns-radar",
      color: "bg-slate-600"
    },
    {
      title: "Supplier Scoreboard",
      description: "Real-time supplier performance and risk assessment dashboard",
      icon: "🧮",
      path: "/supplier-score",
      color: "bg-gray-700"
    },
    {
      title: "DemandDNA",
      description: "Predict micro-trends by analyzing social signals and search patterns",
      icon: "🔍",
      path: "/demand-dna",
      color: "bg-teal-700"
    },
    {
      title: "SmartDropSync",
      description: "Optimize delivery dock scheduling to reduce wait times and congestion",
      icon: "🚚",
      path: "/smart-drop-sync",
      color: "bg-slate-700"
    },
    {
      title: "LoadSwap",
      description: "Smart parcel rebalancing between delivery vehicles for optimal efficiency",
      icon: "🔄",
      path: "/loadswap",
      color: "bg-gray-600"
    }
  ];

  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-teal-700 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transforming Supply Chains
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-teal-100">
                Innovating inventory, delivery, and returns with AI
              </p>
              <div className="inline-flex items-center space-x-4">
                <div className="w-16 h-16 bg-teal-200 rounded-full flex items-center justify-center">
                  <span className="text-teal-800 font-bold text-2xl">W</span>
                </div>
                <span className="text-teal-200 font-semibold text-lg">Sparkathon 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Supply Chain Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive suite of AI tools designed to revolutionize every aspect of Walmart's supply chain operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {module.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{module.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={module.path}>
                    <Button className="w-full bg-teal-700 hover:bg-teal-800 text-white group-hover:bg-teal-600 transition-colors">
                      Explore Module
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-teal-700 mb-2">6</div>
                <div className="text-gray-600">AI-Powered Modules</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-700 mb-2">360°</div>
                <div className="text-gray-600">Supply Chain Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-700 mb-2">Real-time</div>
                <div className="text-gray-600">Decision Making</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-teal-700 mb-2">Smart</div>
                <div className="text-gray-600">Automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
