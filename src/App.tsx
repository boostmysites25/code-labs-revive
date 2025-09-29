
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import AMPDevelopment from "./pages/AMPDevelopment";
import MobileDevelopment from "./pages/MobileDevelopment";
import AIIntegration from "./pages/AIIntegration";
import UIDesign from "./pages/UIDesign";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-retro-dark pt-24">
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/mobile-development" element={<MobileDevelopment />} />
            <Route path="/ai-integration" element={<AIIntegration />} />
            <Route path="/ui-design" element={<UIDesign />} />
            <Route path="/amp-development" element={<AMPDevelopment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
