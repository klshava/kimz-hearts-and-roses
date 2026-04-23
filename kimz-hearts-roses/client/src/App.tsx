import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Router } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Giveaways from "./pages/Giveaways";
import Policies from "./pages/Policies";
import FAQ from "./pages/FAQ";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/giveaways" component={Giveaways} />
        <Route path="/policies" component={Policies} />
        <Route path="/faq" component={FAQ} />
        <Route path="/book" component={BookNow} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <Router base="/kimz-hearts-and-roses">
        <TooltipProvider>
          <Toaster />
          {loading ? <LoadingScreen onComplete={() => setLoading(false)} /> : <AppRouter />}
        </TooltipProvider>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
