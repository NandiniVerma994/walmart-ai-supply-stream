import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SupplierScore = () => {
  const suppliers = [
    {
      name: "TechCorp Solutions",
      leadTimeAccuracy: 94,
      riskScore: 2.1,
      delayFrequency: 6,
      status: "Excellent",
      action: "Maintain",
      region: "North America",
    },
    {
      name: "Global Manufacturing Ltd",
      leadTimeAccuracy: 87,
      riskScore: 3.8,
      delayFrequency: 12,
      status: "Good",
      action: "Monitor",
      region: "Asia",
    },
    {
      name: "QuickShip Logistics",
      leadTimeAccuracy: 78,
      riskScore: 5.2,
      delayFrequency: 18,
      status: "Warning",
      action: "Flag",
      region: "Europe",
    },
    {
      name: "Reliable Goods Co",
      leadTimeAccuracy: 92,
      riskScore: 2.7,
      delayFrequency: 8,
      status: "Excellent",
      action: "Maintain",
      region: "North America",
    },
    {
      name: "Budget Suppliers Inc",
      leadTimeAccuracy: 65,
      riskScore: 7.8,
      delayFrequency: 25,
      status: "Critical",
      action: "Shift Orders",
      region: "Asia",
    },
  ];

  const riskByRegion = [
    { region: "North America", riskScore: 2.4, suppliers: 15 },
    { region: "Europe", riskScore: 4.1, suppliers: 8 },
    { region: "Asia", riskScore: 5.8, suppliers: 12 },
    { region: "South America", riskScore: 3.2, suppliers: 6 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Excellent":
        return "bg-green-100 text-green-800";
      case "Good":
        return "bg-blue-100 text-blue-800";
      case "Warning":
        return "bg-yellow-100 text-yellow-800";
      case "Critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getActionColor = (action) => {
    switch (action) {
      case "Maintain":
        return "bg-green-100 text-green-800";
      case "Monitor":
        return "bg-blue-100 text-blue-800";
      case "Flag":
        return "bg-yellow-100 text-yellow-800";
      case "Shift Orders":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-800 to-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🧮 Supplier Performance & Risk Dashboard
          </h1>
          <p className="text-lg text-teal-100">
            Helps Walmart pick better-performing suppliers in real-time through
            comprehensive performance tracking and risk assessment.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">41</div>
                <p className="text-sm text-gray-600">Active Suppliers</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  87%
                </div>
                <p className="text-sm text-gray-600">Avg Lead Time Accuracy</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  3.8
                </div>
                <p className="text-sm text-gray-600">Avg Risk Score</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">14%</div>
                <p className="text-sm text-gray-600">Suppliers at Risk</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Supplier Performance Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Supplier Performance Overview</CardTitle>
              <CardDescription>
                Real-time performance metrics and recommended actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Supplier</th>
                      <th className="text-left p-3 font-semibold">
                        Lead Time Accuracy
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Risk Score
                      </th>
                      <th className="text-left p-3 font-semibold">
                        Delay Frequency
                      </th>
                      <th className="text-left p-3 font-semibold">Status</th>
                      <th className="text-left p-3 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {suppliers.map((supplier, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-3">
                          <div>
                            <div className="font-medium">{supplier.name}</div>
                            <div className="text-sm text-gray-500">
                              {supplier.region}
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${supplier.leadTimeAccuracy}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">
                              {supplier.leadTimeAccuracy}%
                            </span>
                          </div>
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-sm font-medium ${
                              supplier.riskScore <= 3
                                ? "bg-green-100 text-green-800"
                                : supplier.riskScore <= 5
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {supplier.riskScore}
                          </span>
                        </td>
                        <td className="p-3">{supplier.delayFrequency}%</td>
                        <td className="p-3">
                          <Badge className={getStatusColor(supplier.status)}>
                            {supplier.status}
                          </Badge>
                        </td>
                        <td className="p-3">
                          <Badge className={getActionColor(supplier.action)}>
                            {supplier.action}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Risk by Region Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Risk by Region</CardTitle>
              <CardDescription>Regional supplier risk analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={riskByRegion} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 8]} />
                  <YAxis dataKey="region" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="riskScore" fill="#0071ce" />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {riskByRegion.map((region, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{region.region}</span>
                    <span className="text-gray-500">
                      {region.suppliers} suppliers
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Recommendations */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>AI-Generated Action Recommendations</CardTitle>
            <CardDescription>
              Smart suggestions to optimize supplier relationships
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-red-800">
                    Critical Action Required
                  </span>
                </div>
                <p className="text-sm text-red-700 mb-3">
                  Budget Suppliers Inc shows consistent delays and high risk
                  scores.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-red-700 border-red-300"
                >
                  Shift 40% of orders to backup suppliers
                </Button>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-yellow-800">
                    Monitor Closely
                  </span>
                </div>
                <p className="text-sm text-yellow-700 mb-3">
                  QuickShip Logistics showing declining performance trends.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-yellow-700 border-yellow-300"
                >
                  Schedule performance review
                </Button>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-green-800">
                    Opportunity
                  </span>
                </div>
                <p className="text-sm text-green-700 mb-3">
                  TechCorp Solutions exceeds all KPIs. Consider increasing order
                  volume.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-green-700 border-green-300"
                >
                  Expand partnership
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                How Supplier Scoreboard Works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-blue-600 font-semibold mb-2">
                    📊 Monitor
                  </div>
                  <p>
                    Continuously tracks lead time accuracy, quality metrics, and
                    delivery performance
                  </p>
                </div>
                <div>
                  <div className="text-purple-600 font-semibold mb-2">
                    🎯 Analyze
                  </div>
                  <p>
                    AI calculates risk scores based on historical patterns and
                    external factors
                  </p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold mb-2">
                    ⚠️ Alert
                  </div>
                  <p>
                    Proactively flags suppliers showing performance decline or
                    risk increases
                  </p>
                </div>
                <div>
                  <div className="text-orange-600 font-semibold mb-2">
                    🎬 Act
                  </div>
                  <p>
                    Provides actionable recommendations to optimize supplier
                    relationships
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

export default SupplierScore;
