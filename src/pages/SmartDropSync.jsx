import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const SmartDropSync = () => {
  const [optimization, setOptimization] = useState(null);

  const dcLoadData = [
    { time: "6 AM", load: 45, capacity: 100, efficiency: 45 },
    { time: "8 AM", load: 85, capacity: 100, efficiency: 85 },
    { time: "10 AM", load: 95, capacity: 100, efficiency: 95 },
    { time: "12 PM", load: 78, capacity: 100, efficiency: 78 },
    { time: "2 PM", load: 92, capacity: 100, efficiency: 92 },
    { time: "4 PM", load: 67, capacity: 100, efficiency: 67 },
    { time: "6 PM", load: 34, capacity: 100, efficiency: 34 },
  ];

  const supplierCompliance = [
    {
      supplier: "FastTrack Logistics",
      score: 94,
      onTimeDeliveries: 347,
      lateDeliveries: 23,
      status: "Excellent",
    },
    {
      supplier: "QuickShip Solutions",
      score: 87,
      onTimeDeliveries: 298,
      lateDeliveries: 45,
      status: "Good",
    },
    {
      supplier: "Reliable Transport",
      score: 91,
      onTimeDeliveries: 412,
      lateDeliveries: 38,
      status: "Excellent",
    },
    {
      supplier: "Budget Delivery Co",
      score: 73,
      onTimeDeliveries: 189,
      lateDeliveries: 71,
      status: "Warning",
    },
  ];

  const handleOptimization = () => {
    setOptimization({
      suggestedTime: "6:00 AM - 7:00 AM",
      dock: "Dock 3",
      loadReduction: "32%",
      waitTimeReduction: "18 minutes",
      energySaving: "$145",
    });
  };

  const getComplianceColor = (score) => {
    if (score >= 90) return "bg-green-100 text-green-800";
    if (score >= 80) return "bg-blue-100 text-blue-800";
    if (score >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🚚 SmartDropSync – Delivery Dock Optimizer
          </h1>
          <p className="text-lg text-teal-100">
            Schedules incoming deliveries to avoid crowding, reduce wait times,
            and optimize distribution center efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Optimization Request</CardTitle>
              <CardDescription>
                Schedule your delivery for optimal dock time
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="supplier">Supplier</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select supplier" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fasttrack">
                      FastTrack Logistics
                    </SelectItem>
                    <SelectItem value="quickship">
                      QuickShip Solutions
                    </SelectItem>
                    <SelectItem value="reliable">Reliable Transport</SelectItem>
                    <SelectItem value="budget">Budget Delivery Co</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="delivery-type">Delivery Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select delivery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Freight</SelectItem>
                    <SelectItem value="refrigerated">Refrigerated</SelectItem>
                    <SelectItem value="hazmat">Hazardous Materials</SelectItem>
                    <SelectItem value="oversized">Oversized Load</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="dc-location">DC Location</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select DC" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="atlanta">Atlanta DC</SelectItem>
                    <SelectItem value="dallas">Dallas DC</SelectItem>
                    <SelectItem value="phoenix">Phoenix DC</SelectItem>
                    <SelectItem value="chicago">Chicago DC</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="eta">Estimated Arrival</Label>
                <Input type="datetime-local" id="eta" />
              </div>

              <Button
                onClick={handleOptimization}
                className="w-full bg-[#0071ce] hover:bg-[#004c87]"
              >
                Optimize Dock Time
              </Button>
            </CardContent>
          </Card>

          {/* Optimization Results */}
          <Card
            className={`${
              optimization ? "bg-green-50 border-green-200" : "bg-gray-50"
            } transition-all duration-500`}
          >
            <CardHeader>
              <CardTitle>Optimized Schedule</CardTitle>
              <CardDescription>AI-recommended delivery window</CardDescription>
            </CardHeader>
            <CardContent>
              {optimization ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {optimization.suggestedTime}
                    </div>
                    <p className="text-gray-600 mb-1">
                      Optimal Delivery Window
                    </p>
                    <Badge className="bg-green-100 text-green-800">
                      {optimization.dock}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-xl font-bold text-blue-600">
                        {optimization.loadReduction}
                      </div>
                      <p className="text-sm text-gray-600">Load Reduction</p>
                    </div>
                    <div className="text-center p-3 bg-white rounded-lg border">
                      <div className="text-xl font-bold text-purple-600">
                        {optimization.waitTimeReduction}
                      </div>
                      <p className="text-sm text-gray-600">Wait Time Saved</p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>✅ Reduced dock congestion</li>
                      <li>✅ Faster unloading process</li>
                      <li>✅ Energy savings: {optimization.energySaving}</li>
                      <li>✅ Improved supplier satisfaction</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-12">
                  Submit delivery details to get optimization recommendations
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* DC Load Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Distribution Center Load Analysis</CardTitle>
            <CardDescription>
              Real-time dock utilization throughout the day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={dcLoadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="load" fill="#0071ce" name="Current Load" />
                <Bar dataKey="capacity" fill="#e5e7eb" name="Total Capacity" />
              </BarChart>
            </ResponsiveContainer>
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#0071ce] rounded mr-2"></div>
                <span>Current Load</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-gray-300 rounded mr-2"></div>
                <span>Available Capacity</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Supplier Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Supplier Delivery Compliance</CardTitle>
            <CardDescription>
              Performance tracking for delivery partners
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Supplier</th>
                    <th className="text-left p-3 font-semibold">
                      Compliance Score
                    </th>
                    <th className="text-left p-3 font-semibold">
                      On-Time Deliveries
                    </th>
                    <th className="text-left p-3 font-semibold">
                      Late Deliveries
                    </th>
                    <th className="text-left p-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {supplierCompliance.map((supplier, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{supplier.supplier}</td>
                      <td className="p-3">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${supplier.score}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">
                            {supplier.score}%
                          </span>
                        </div>
                      </td>
                      <td className="p-3 text-green-600 font-medium">
                        {supplier.onTimeDeliveries}
                      </td>
                      <td className="p-3 text-red-600 font-medium">
                        {supplier.lateDeliveries}
                      </td>
                      <td className="p-3">
                        <Badge className={getComplianceColor(supplier.score)}>
                          {supplier.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                How SmartDropSync Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-blue-600 font-semibold mb-2">
                    📅 Schedule
                  </div>
                  <p>
                    Analyzes current and predicted dock loads to find optimal
                    delivery windows
                  </p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold mb-2">
                    🎯 Optimize
                  </div>
                  <p>
                    Balances dock utilization, supplier preferences, and
                    operational efficiency
                  </p>
                </div>
                <div>
                  <div className="text-purple-600 font-semibold mb-2">
                    📊 Monitor
                  </div>
                  <p>
                    Tracks compliance and adjusts recommendations based on real
                    performance
                  </p>
                </div>
                <div>
                  <div className="text-orange-600 font-semibold mb-2">
                    💰 Save
                  </div>
                  <p>
                    Reduces wait times, energy costs, and improves overall
                    supply chain efficiency
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SmartDropSync;
