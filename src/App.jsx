import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Index from "./pages/Index";
import SupplierDashboard from "./pages/supplierDashboard";
import WalmartStoreManagerDashboard from "./pages/walmartStoreManagerDashboard";
import DeliveryDispatcherDashboard from "./pages/deliveryDispatcherDashboard";
import InventorySimulator from "./pages/InventorySimulator";
import ReturnsRadar from "./pages/ReturnsRadar";
import SupplierScore from "./pages/SupplierScore";
import DemandDNA from "./pages/DemandDNA";
import SmartDropSync from "./pages/SmartDropSync";
import LoadSwap from "./pages/LoadSwap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Supplier Dashboard with nested routes */}
          <Route path="/supplier-dashboard" element={<SupplierDashboard />}>
            <Route path="supplier-score" element={<SupplierScore />} />
            <Route path="smart-drop-sync" element={<SmartDropSync />} />
            <Route path="returns-radar" element={<ReturnsRadar />} />
          </Route>

          {/* Walmart Store Manager Dashboard with nested routes */}
          <Route
            path="/walmart-store-manager-dashboard"
            element={<WalmartStoreManagerDashboard />}
          >
            <Route
              path="inventory-simulator"
              element={<InventorySimulator />}
            />
            <Route path="returns-radar" element={<ReturnsRadar />} />
            <Route path="demand-dna" element={<DemandDNA />} />
            <Route path="supplier-score" element={<SupplierScore />} />
          </Route>

          {/* Delivery Dispatcher Dashboard with nested routes */}
          <Route
            path="/delivery-dispatcher-dashboard"
            element={<DeliveryDispatcherDashboard />}
          >
            <Route path="loadswap" element={<LoadSwap />} />
            <Route path="smart-drop-sync" element={<SmartDropSync />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
