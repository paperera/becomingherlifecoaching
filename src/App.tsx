import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { SiteShell } from '@/components/site-shell';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';
import CoachingPage from '@/pages/coaching';
import FaqPage from '@/pages/faq';
import ContactPage from '@/pages/contact';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const projectBasePath = '/becomingherlifecoaching';
const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Life Coaching for Women | Melanie Abney',
    description: 'A supportive introduction to life coaching for women considering change, seeking clarity, and finding their own next step with Melanie Abney.',
  },
  '/about': {
    title: 'About Melanie Abney | Becoming Her',
    description: 'Learn about Melanie Abney and Becoming Her Life Coaching. This editable story page includes prompts for verified background and personal details.',
  },
  '/coaching': {
    title: 'Life Coaching | Becoming Her with Melanie Abney',
    description: 'Explore what life coaching can involve, with clearly marked prompts for Melanie Abney’s confirmed offers, formats, and prices.',
  },
  '/faq': {
    title: 'Life Coaching Questions | Becoming Her',
    description: 'Find thoughtful answers to common questions about life coaching, expectations, boundaries, and next steps.',
  },
  '/contact': {
    title: 'Contact & Booking | Becoming Her',
    description: 'A contact and booking template for Becoming Her Life Coaching. Add Melanie Abney’s verified contact or booking destination before publishing.',
  },
};

function RouteMetadata() {
  const [location] = useLocation();
  useEffect(() => {
    const meta = routeMeta[location] ?? {
      title: 'Page not found | Becoming Her Life Coaching',
      description: 'The page you are looking for could not be found. Explore Becoming Her Life Coaching with Melanie Abney.',
    };
    document.title = meta.title;
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
  }, [location]);
  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <RouteMetadata />
      <SiteShell>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/coaching" component={CoachingPage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </SiteShell>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  const routerBase = window.location.pathname === projectBasePath || window.location.pathname.startsWith(`${projectBasePath}/`)
    ? projectBasePath
    : '';

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={routerBase}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
