import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Ecommerce from "./components/Ecommerce";
import ScrollToHash from "./components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HashRouter>
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>

      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;