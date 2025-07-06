
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/inventory-simulator", label: "Inventory Simulator", icon: "📦" },
    { path: "/returns-radar", label: "Returns Radar", icon: "🔁" },
    { path: "/supplier-score", label: "Supplier Scoreboard", icon: "🧮" },
    { path: "/demand-dna", label: "DemandDNA", icon: "🔍" },
    { path: "/smart-drop-sync", label: "SmartDropSync", icon: "🚚" },
    { path: "/loadswap", label: "LoadSwap", icon: "🔄" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-teal-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center">
                  <span className="text-teal-800 font-bold text-lg">W</span>
                </div>
                <span className="text-white font-bold text-xl">Supply Chain AI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path && "text-teal-200 bg-white/10"
                  )}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Walmart Sparkathon 2024</h3>
              <p className="text-gray-300">Transforming Supply Chains with AI</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Team Innovation</h3>
              <p className="text-gray-300">Building the future of retail logistics</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Focus</h3>
              <p className="text-gray-300">AI-powered inventory, delivery, and returns optimization</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Walmart Sparkathon Project - Supply Chain AI Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
