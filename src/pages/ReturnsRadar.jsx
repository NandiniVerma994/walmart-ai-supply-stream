
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ReturnsRadar = () => {
  const [prediction, setPrediction] = useState(null);

  const returnPaths = [
    { path: 'Resale', percentage: 45, action: 'Restock to shelf', timeline: '2-3 days' },
    { path: 'Refurbish', percentage: 30, action: 'Minor repairs', timeline: '5-7 days' },
    { path: 'Clearance', percentage: 20, action: 'Discount sale', timeline: '1-2 weeks' },
    { path: 'Recycle/Dispose', percentage: 5, action: 'Environmental disposal', timeline: '1 week' },
  ];

  const handlePrediction = () => {
    setPrediction({
      returnChance: 32,
      riskLevel: 'Medium',
      suggestedHub: 'Hub A - Atlanta',
      confidenceScore: 87
    });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔁 Returns Prediction & Reverse Logistics</h1>
          <p className="text-lg text-gray-600">
            Predicts returns before they happen and prepares smart reverse logistics pathways to minimize costs and maximize recovery value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle>Return Risk Assessment</CardTitle>
              <CardDescription>Analyze potential return probability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category">Product Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="clothing">Clothing</SelectItem>
                    <SelectItem value="home-decor">Home Decor</SelectItem>
                    <SelectItem value="toys">Toys & Games</SelectItem>
                    <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="zipcode">Customer Zip Code</Label>
                <Input type="text" id="zipcode" placeholder="Enter zip code" />
              </div>

              <div>
                <Label htmlFor="profile">Buyer Profile</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select buyer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frequent">Frequent Shopper</SelectItem>
                    <SelectItem value="occasional">Occasional Buyer</SelectItem>
                    <SelectItem value="first-time">First-time Customer</SelectItem>
                    <SelectItem value="premium">Premium Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="season">Season/Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="holiday">Holiday Season</SelectItem>
                    <SelectItem value="back-to-school">Back to School</SelectItem>
                    <SelectItem value="summer">Summer</SelectItem>
                    <SelectItem value="regular">Regular Period</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handlePrediction} className="w-full bg-teal-700 hover:bg-teal-800">
                Analyze Return Risk
              </Button>
            </CardContent>
          </Card>

          {/* Prediction Results */}
          <div className="space-y-6">
            <Card className={`${prediction ? 'bg-red-50 border-red-200' : 'bg-gray-50'} transition-all duration-500`}>
              <CardHeader>
                <CardTitle>Return Prediction</CardTitle>
                <CardDescription>AI-powered return probability analysis</CardDescription>
              </CardHeader>
              <CardContent>
                {prediction ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{prediction.returnChance}%</div>
                      <p className="text-gray-600">Return Probability</p>
                      <Badge variant={prediction.riskLevel === 'High' ? 'destructive' : 'secondary'} className="mt-2">
                        {prediction.riskLevel} Risk
                      </Badge>
                    </div>
                    <div className="border-t pt-4">
                      <p className="font-semibold mb-2">Recommended Actions:</p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Pre-route to {prediction.suggestedHub}</li>
                        <li>• Set aside return processing capacity</li>
                        <li>• Prepare quality check resources</li>
                      </ul>
                    </div>
                    <div className="text-sm text-gray-500">
                      Confidence Score: {prediction.confidenceScore}%
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-8">
                    Run analysis to see prediction results
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pre-routing Suggestion</CardTitle>
                <CardDescription>Optimized logistics for expected returns</CardDescription>
              </CardHeader>
              <CardContent>
                {prediction ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Ship from:</span>
                      <span className="text-blue-600 font-semibold">{prediction.suggestedHub}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>✅ Reduced return shipping distance by 23%</p>
                      <p>✅ Lower processing costs</p>
                      <p>✅ Faster customer refund processing</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 py-4">
                    Awaiting prediction analysis
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Return Paths Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Smart Return Path Distribution</CardTitle>
            <CardDescription>AI-optimized routing for returned items based on condition and value recovery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {returnPaths.map((path, index) => (
                <Card key={index} className="border-l-4 border-l-teal-600">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{path.percentage}%</div>
                      <div className="font-semibold text-gray-700 mb-2">{path.path}</div>
                      <div className="text-sm text-gray-600 mb-2">{path.action}</div>
                      <Badge variant="outline" className="text-xs">
                        {path.timeline}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary Section */}
        <Card className="mt-8 bg-gradient-to-r from-teal-50 to-slate-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">How Returns Radar Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-teal-600 font-semibold mb-2">🎯 Predict</div>
                  <p>AI analyzes customer behavior, product history, and seasonal patterns to predict return likelihood</p>
                </div>
                <div>
                  <div className="text-slate-600 font-semibold mb-2">🚚 Prepare</div>
                  <p>Pre-positions inventory and logistics resources based on predicted return volumes</p>
                </div>
                <div>
                  <div className="text-gray-600 font-semibold mb-2">♻️ Process</div>
                  <p>Routes returns through optimized paths to maximize value recovery and minimize costs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ReturnsRadar;
