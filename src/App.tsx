
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          <Route path="/inventory-simulator" element={<InventorySimulator />} />
          <Route path="/returns-radar" element={<ReturnsRadar />} />
          <Route path="/supplier-score" element={<SupplierScore />} />
          <Route path="/demand-dna" element={<DemandDNA />} />
          <Route path="/smart-drop-sync" element={<SmartDropSync />} />
          <Route path="/loadswap" element={<LoadSwap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
