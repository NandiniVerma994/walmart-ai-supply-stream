
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from "react";

const InventorySimulator = () => {
  const [simulationRun, setSimulationRun] = useState(false);

  const salesData = [
    { month: 'Jan', sales: 4000, stock: 2400 },
    { month: 'Feb', sales: 3000, stock: 1398 },
    { month: 'Mar', sales: 2000, stock: 9800 },
    { month: 'Apr', sales: 2780, stock: 3908 },
    { month: 'May', sales: 1890, stock: 4800 },
    { month: 'Jun', sales: 2390, stock: 3800 },
  ];

  const historicalData = [
    { month: 'January', temp: '72°F', unitsSold: 1250, stockLeft: 450 },
    { month: 'February', temp: '68°F', unitsSold: 1100, stockLeft: 380 },
    { month: 'March', temp: '75°F', unitsSold: 1380, stockLeft: 520 },
    { month: 'April', temp: '80°F', unitsSold: 1520, stockLeft: 290 },
    { month: 'May', temp: '85°F', unitsSold: 1670, stockLeft: 150 },
  ];

  const handleSimulation = () => {
    setSimulationRun(true);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">📦 Inventory Decision Simulator</h1>
          <p className="text-lg text-gray-600">
            Helps Walmart test inventory moves before they happen using AI-powered predictions and market analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Simulation Parameters</CardTitle>
              <CardDescription>Configure your inventory scenario</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="product">Product</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home-garden">Home & Garden</SelectItem>
                    <SelectItem value="food-beverages">Food & Beverages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="region">Region</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="northeast">Northeast</SelectItem>
                    <SelectItem value="southeast">Southeast</SelectItem>
                    <SelectItem value="midwest">Midwest</SelectItem>
                    <SelectItem value="west">West</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="date">Target Date</Label>
                <Input type="date" id="date" />
              </div>

              <div>
                <Label htmlFor="quantity">Quantity</Label>
                <Input type="number" id="quantity" placeholder="Enter quantity" />
              </div>

              <Button onClick={handleSimulation} className="w-full bg-[#0071ce] hover:bg-[#004c87]">
                Run Simulation
              </Button>
            </CardContent>
          </Card>

          {/* Results Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className={`${simulationRun ? 'bg-green-50 border-green-200' : 'bg-gray-50'} transition-all duration-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Sales Uplift</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    {simulationRun ? '+12.5%' : '--'}
                  </div>
                  <p className="text-sm text-gray-600">Expected increase</p>
                </CardContent>
              </Card>

              <Card className={`${simulationRun ? 'bg-orange-50 border-orange-200' : 'bg-gray-50'} transition-all duration-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Holding Cost</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600">
                    {simulationRun ? '$2,450' : '--'}
                  </div>
                  <p className="text-sm text-gray-600">Monthly storage cost</p>
                </CardContent>
              </Card>

              <Card className={`${simulationRun ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'} transition-all duration-500`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Net Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {simulationRun ? '+$8,950' : '--'}
                  </div>
                  <p className="text-sm text-gray-600">Projected profit</p>
                </CardContent>
              </Card>
            </div>

            {/* Sales Trend Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Sales Trend Analysis</CardTitle>
                <CardDescription>Historical sales and stock levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#0071ce" strokeWidth={2} />
                    <Line type="monotone" dataKey="stock" stroke="#ffc220" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Historical Data Table */}
            <Card>
              <CardHeader>
                <CardTitle>Historical Performance Data</CardTitle>
                <CardDescription>Temperature correlation and stock analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold">Month</th>
                        <th className="text-left p-3 font-semibold">Avg Temperature</th>
                        <th className="text-left p-3 font-semibold">Units Sold</th>
                        <th className="text-left p-3 font-semibold">Stock Left</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historicalData.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">{row.month}</td>
                          <td className="p-3">{row.temp}</td>
                          <td className="p-3">{row.unitsSold.toLocaleString()}</td>
                          <td className="p-3">{row.stockLeft}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InventorySimulator;
