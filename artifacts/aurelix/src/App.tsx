import { useLayoutEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import AfroMusePage from "@/pages/afromuse";
import GTProPage from "@/pages/gtpro";
import DocumentationPage from "@/pages/documentation";
import BlogPage from "@/pages/blog";
import PressKitPage from "@/pages/press-kit";
import ContactPage from "@/pages/contact";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import TermsOfServicePage from "@/pages/terms-of-service";
import AdminLeadsPage from "@/pages/admin-leads";
import { ProgressBar } from "@/components/ui/progress-bar";
import { pageVariants, pageTransition } from "@/lib/page-transition";

function Router() {
  const [location] = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Switch location={location}>
          <Route path="/" component={HomePage} />
          <Route path="/afromuse" component={AfroMusePage} />
          <Route path="/gtpro" component={GTProPage} />
          <Route path="/documentation" component={DocumentationPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/press-kit" component={PressKitPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/privacy-policy" component={PrivacyPolicyPage} />
          <Route path="/terms-of-service" component={TermsOfServicePage} />
          <Route path="/admin/leads" component={AdminLeadsPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ProgressBar />
      <Router />
    </WouterRouter>
  );
}

export default App;
