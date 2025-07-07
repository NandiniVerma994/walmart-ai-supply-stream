"use client";

import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Truck, ArrowLeft } from "lucide-react";

export default function DeliveryDispatcherDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const dashboardCards = [
    {
      title: "LoadSwap",
      description:
        "Optimize load distribution and rebalance delivery van loads",
      icon: Zap,
      color: "bg-yellow-500",
      route: "/delivery-dispatcher-dashboard/loadswap",
    },
    {
      title: "SmartDropSync",
      description: "Coordinate delivery schedules and dock management",
      icon: Truck,
      color: "bg-orange-500",
      route: "/delivery-dispatcher-dashboard/smart-drop-sync",
    },
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  // Check if we're on a child route
  const isOnChildRoute = location.pathname !== "/delivery-dispatcher-dashboard";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-teal-600/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-teal-100 hover:text-white hover:bg-teal-800/50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              {isOnChildRoute && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate("/delivery-dispatcher-dashboard")}
                  className="text-teal-100 hover:text-white hover:bg-teal-800/50"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              )}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">W</span>
                </div>
                <span className="text-white font-semibold text-xl">
                  OptiChain
                </span>
              </div>
            </div>
            <div className="text-teal-100">
              <span className="text-sm">Welcome, Delivery Dispatcher</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {isOnChildRoute ? (
        // Show nested component
        <Outlet />
      ) : (
        // Show dashboard overview
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Dashboard Access
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              Access your delivery coordination tools to optimize logistics
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {dashboardCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl hover:scale-105 transition-all duration-500 border-0 bg-gradient-to-br from-white via-gray-50 to-white hover:from-teal-50 hover:via-white hover:to-emerald-50 group relative overflow-hidden cursor-pointer"
                  onClick={() => handleCardClick(card.route)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>
                  <CardHeader className="relative z-10 text-center">
                    <div
                      className={`w-16 h-16 ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl mx-auto`}
                    >
                      <IconComponent className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-teal-700 transition-colors duration-300 group-hover:translate-x-1">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center">
                    <CardDescription className="text-base group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-1">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
