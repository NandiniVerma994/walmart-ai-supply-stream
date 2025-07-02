
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

const LoadSwap = () => {
  const [swapExecuted, setSwapExecuted] = useState(false);

  const vanAData = {
    id: 'Van A',
    driver: 'John Smith',
    currentLoad: 95,
    capacity: 100,
    parcels: [
      { id: 'P001', destination: 'Downtown', priority: 'High', weight: '5 lbs' },
      { id: 'P002', destination: 'Suburb North', priority: 'Medium', weight: '3 lbs' },
      { id: 'P003', destination: 'Industrial Area', priority: 'High', weight: '8 lbs' },
      { id: 'P004', destination: 'Mall District', priority: 'Low', weight: '2 lbs' },
      { id: 'P005', destination: 'Residential', priority: 'Medium', weight: '4 lbs' },
    ],
    status: 'Overloaded',
    estimatedDelay: '45 minutes'
  };

  const vanBData = {
    id: 'Van B',
    driver: 'Sarah Johnson',
    currentLoad: 45,
    capacity: 100,
    parcels: [
      { id: 'P101', destination: 'City Center', priority: 'High', weight: '6 lbs' },
      { id: 'P102', destination: 'East Side', priority: 'Medium', weight: '4 lbs' },
    ],
    status: 'Under-utilized',
    estimatedDelay: 'On time'
  };

  const swapSuggestion = {
    swapPoint: 'Central Hub - 5th Street',
    parcelsToSwap: ['P002', 'P004', 'P005'],
    timeToSwap: '8 minutes',
    fuelSaved: '$12.50',
    slaImprovement: '23%'
  };

  const handleSwapExecution = () => {
    setSwapExecuted(true);
  };

  const getLoadColor = (load: number) => {
    if (load >= 90) return 'bg-red-500';
    if (load >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔄 LoadSwap – Smart Parcel Rebalancing</h1>
          <p className="text-lg text-gray-600">
            Like Uber Pool for packages. Intelligently redistributes parcels between delivery vehicles to save costs and improve delivery times.
          </p>
        </div>

        {/* Van Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Van A */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  {vanAData.id} - {vanAData.driver}
                </CardTitle>
                <Badge className="bg-red-100 text-red-800">{vanAData.status}</Badge>
              </div>
              <CardDescription>
                Load: {vanAData.currentLoad}% of capacity • Delay: {vanAData.estimatedDelay}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Load Capacity</span>
                  <span>{vanAData.currentLoad}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getLoadColor(vanAData.currentLoad)}`}
                    style={{ width: `${vanAData.currentLoad}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Parcels ({vanAData.parcels.length}):</h4>
                {vanAData.parcels.map((parcel, index) => (
                  <div key={index} className={`p-2 rounded border ${
                    swapSuggestion.parcelsToSwap.includes(parcel.id) 
                      ? 'bg-yellow-100 border-yellow-300' 
                      : 'bg-white border-gray-200'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-sm">{parcel.id}</span>
                        <p className="text-xs text-gray-600">{parcel.destination}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getPriorityColor(parcel.priority)} style={{ fontSize: '10px' }}>
                          {parcel.priority}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{parcel.weight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Van B */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  {vanBData.id} - {vanBData.driver}
                </CardTitle>
                <Badge className="bg-green-100 text-green-800">{vanBData.status}</Badge>
              </div>
              <CardDescription>
                Load: {vanBData.currentLoad}% of capacity • Status: {vanBData.estimatedDelay}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Load Capacity</span>
                  <span>{vanBData.currentLoad}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getLoadColor(vanBData.currentLoad)}`}
                    style={{ width: `${vanBData.currentLoad}%` }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Parcels ({vanBData.parcels.length}):</h4>
                {vanBData.parcels.map((parcel, index) => (
                  <div key={index} className="p-2 bg-white rounded border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium text-sm">{parcel.id}</span>
                        <p className="text-xs text-gray-600">{parcel.destination}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={getPriorityColor(parcel.priority)} style={{ fontSize: '10px' }}>
                          {parcel.priority}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{parcel.weight}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Available space indicator */}
                <div className="p-2 bg-blue-50 rounded border border-blue-200 border-dashed">
                  <p className="text-sm text-blue-600 text-center">
                    Available capacity: {vanBData.capacity - vanBData.currentLoad}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Swap Recommendation */}
        <Card className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              Smart Swap Recommendation
            </CardTitle>
            <CardDescription>AI-optimized parcel redistribution strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">3 Parcels</div>
                <p className="text-sm text-gray-600">Recommended to swap</p>
                <div className="mt-2">
                  {swapSuggestion.parcelsToSwap.map((id, index) => (
                    <Badge key={index} variant="outline" className="mr-1 mb-1">
                      {id}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">{swapSuggestion.timeToSwap}</div>
                <p className="text-sm text-gray-600">Swap duration</p>
                <p className="text-xs text-gray-500 mt-1">at {swapSuggestion.swapPoint}</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">{swapSuggestion.slaImprovement}</div>
                <p className="text-sm text-gray-600">SLA improvement</p>
                <p className="text-xs text-gray-500 mt-1">Fuel saved: {swapSuggestion.fuelSaved}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border">
              <h4 className="font-semibold mb-2">Swap Process:</h4>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Van A (Overloaded)</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="text-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"></div>
                  <span className="text-xs">Swap Point</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400" />
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Van B (Available Space)</span>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSwapExecution} 
              className="w-full mt-4 bg-[#0071ce] hover:bg-[#004c87]"
              disabled={swapExecuted}
            >
              {swapExecuted ? 'Swap Executed Successfully!' : 'Execute Smart Swap'}
            </Button>
          </CardContent>
        </Card>

        {/* Results After Swap */}
        {swapExecuted && (
          <Card className="mb-8 bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Swap Results</CardTitle>
              <CardDescription>Optimized load distribution achieved</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Van A - After Swap:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>New Load:</span>
                      <span className="font-medium text-green-600">72%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Parcels:</span>
                      <span className="font-medium">2 remaining</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Delay:</span>
                      <span className="font-medium text-green-600">On time</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Van B - After Swap:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>New Load:</span>
                      <span className="font-medium text-blue-600">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Parcels:</span>
                      <span className="font-medium">5 total</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Efficiency:</span>
                      <span className="font-medium text-blue-600">Optimized</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border">
                <h4 className="font-semibold text-green-800 mb-2">Overall Benefits:</h4>
                <ul className="space-y-1 text-sm text-green-700">
                  <li>✅ Balanced workload between drivers</li>
                  <li>✅ Reduced delivery delays by 45 minutes</li>
                  <li>✅ Fuel savings of $12.50</li>
                  <li>✅ Improved customer satisfaction scores</li>
                  <li>✅ Enhanced driver work-life balance</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* How It Works */}
        <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">How LoadSwap Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-indigo-600 font-semibold mb-2">📊 Monitor</div>
                  <p>Real-time tracking of vehicle loads, routes, and delivery schedules</p>
                </div>
                <div>
                  <div className="text-cyan-600 font-semibold mb-2">🧠 Analyze</div>
                  <p>AI identifies load imbalances and optimal redistribution opportunities</p>
                </div>
                <div>
                  <div className="text-blue-600 font-semibold mb-2">📍 Locate</div>
                  <p>Finds convenient swap points that minimize detours and time loss</p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold mb-2">🔄 Execute</div>
                  <p>Coordinates parcel transfers for balanced loads and improved efficiency</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LoadSwap;
