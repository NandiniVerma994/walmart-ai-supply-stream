import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const DemandDNA = () => {
  const searchTrends = [
    { product: 'Oat Milk', trendScore: 94, change: '+127%', source: 'Google Trends', region: 'Urban Areas' },
    { product: 'Protein Shake', trendScore: 87, change: '+89%', source: 'TikTok', region: 'Fitness Communities' },
    { product: 'Portable Fans', trendScore: 92, change: '+156%', source: 'Weather Data', region: 'Southern States' },
    { product: 'Gaming Chairs', trendScore: 78, change: '+45%', source: 'Reddit', region: 'College Towns' },
    { product: 'Air Fryers', trendScore: 85, change: '+67%', source: 'YouTube', region: 'Suburban Areas' },
  ];

  const socialSignals = [
    { platform: 'TikTok', signal: 'Oat milk latte recipes', mentions: '2.3M', sentiment: 'Positive' },
    { platform: 'Google Trends', signal: 'Protein powder bulk buy', volume: '↑ 234%', sentiment: 'Growing' },
    { platform: 'Reddit', signal: 'r/BuyItForLife gaming setup', activity: '15K upvotes', sentiment: 'Strong' },
    { platform: 'Instagram', signal: '#airfryerrecipes', hashtags: '892K posts', sentiment: 'Viral' },
  ];

  const forecastCard = {
    location: 'Hyderabad',
    demandSpike: '+7%',
    product: 'Portable Electronics',
    confidence: 89,
    timeline: 'Next 2 weeks'
  };

  const suggestedActions = [
    { action: 'Stock More', product: 'Oat Milk', impact: 'High', effort: 'Medium', roi: '+$45K' },
    { action: 'Flash Sale', product: 'Gaming Chairs', impact: 'Medium', effort: 'Low', roi: '+$23K' },
    { action: 'Bundle Deal', product: 'Air Fryer + Accessories', impact: 'High', effort: 'Medium', roi: '+$67K' },
    { action: 'Pre-order Campaign', product: 'Protein Supplements', impact: 'Medium', effort: 'High', roi: '+$34K' },
  ];

  const getTrendColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 75) return 'bg-blue-100 text-blue-800';
    if (score >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🔍 DemandDNA – Predicting Micro-Trends</h1>
          <p className="text-lg text-gray-600">
            AI reads the culture and predicts what people will buy next by analyzing social signals, search patterns, and cultural movements.
          </p>
        </div>

        {/* Search Bar */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                placeholder="Search for emerging trends, products, or social signals..." 
                className="pl-10 py-3 text-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Search Trends Table */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Trending Products & Search Patterns</CardTitle>
              <CardDescription>Real-time analysis of emerging product demand</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchTrends.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-semibold text-gray-900">{trend.product}</h3>
                        <Badge className={getTrendColor(trend.trendScore)}>
                          {trend.trendScore}
                        </Badge>
                        <span className="text-green-600 font-medium text-sm">{trend.change}</span>
                      </div>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                        <span>Source: {trend.source}</span>
                        <span>•</span>
                        <span>Region: {trend.region}</span>
                      </div>
                    </div>
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${trend.trendScore}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Forecast Card */}
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Demand Forecast</CardTitle>
              <CardDescription>AI-predicted demand spike</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-blue-600">{forecastCard.demandSpike}</div>
                <p className="text-gray-700">demand spike expected in</p>
                <p className="text-xl font-semibold text-blue-800">{forecastCard.location}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Product:</span> {forecastCard.product}</p>
                  <p><span className="font-medium">Timeline:</span> {forecastCard.timeline}</p>
                  <p><span className="font-medium">Confidence:</span> {forecastCard.confidence}%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${forecastCard.confidence}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Signals */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Social Media Signals</CardTitle>
            <CardDescription>Real-time cultural and social trend analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialSignals.map((signal, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline">{signal.platform}</Badge>
                    <Badge className={`${
                      signal.sentiment === 'Positive' || signal.sentiment === 'Strong' ? 'bg-green-100 text-green-800' :
                      signal.sentiment === 'Growing' || signal.sentiment === 'Viral' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {signal.sentiment}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{signal.signal}</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {signal.mentions || signal.volume || signal.activity || signal.hashtags}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>AI-Recommended Actions</CardTitle>
            <CardDescription>Strategic moves to capitalize on emerging trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedActions.map((action, index) => (
                <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{action.action}</h3>
                    <Badge className="bg-green-100 text-green-800">{action.roi}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{action.product}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex space-x-4">
                      <span className="text-gray-500">Impact: <span className="font-medium">{action.impact}</span></span>
                      <span className="text-gray-500">Effort: <span className="font-medium">{action.effort}</span></span>
                    </div>
                    <Button size="sm" className="bg-[#0071ce] hover:bg-[#004c87]">
                      Execute
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <Card className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">How DemandDNA Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-purple-600 font-semibold mb-2">🌐 Listen</div>
                  <p>Monitors social media, search trends, and cultural signals across platforms</p>
                </div>
                <div>
                  <div className="text-pink-600 font-semibold mb-2">🧠 Analyze</div>
                  <p>AI processes signals to identify emerging patterns and micro-trends</p>
                </div>
                <div>
                  <div className="text-blue-600 font-semibold mb-2">📈 Predict</div>
                  <p>Forecasts demand spikes with location and timeline specificity</p>
                </div>
                <div>
                  <div className="text-green-600 font-semibold mb-2">🎯 Act</div>
                  <p>Suggests specific actions to capitalize on predicted trends</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DemandDNA;
