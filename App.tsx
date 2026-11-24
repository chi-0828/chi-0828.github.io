import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Fellowship } from './pages/Fellowship';
import { Visitors } from './pages/Visitors';
import { PROFILE } from './constants';

// Travel pulls in three.js — load it only when the route is visited.
const Travel = lazy(() => import('./pages/Travel').then((m) => ({ default: m.Travel })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const isVisitors = pathname === '/visitors';

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {children}
          {/* Keep Visitors mounted across all routes so visits are counted once without reloading on tab switch. */}
          <div
            aria-hidden={!isVisitors}
            inert={!isVisitors}
            className={
              isVisitors
                ? 'block'
                : 'fixed top-0 left-0 w-[min(48rem,calc(100vw-3rem))] h-px opacity-0 pointer-events-none select-none overflow-hidden -z-50'
            }
          >
            <Visitors active={isVisitors} />
          </div>
        </div>
      </main>
      <footer className="border-t border-line">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <p className="text-xs text-faint">© {new Date().getFullYear()} {PROFILE.name}</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route
          path="/travel"
          element={
            <Suspense fallback={<p className="text-sm text-muted py-20 text-center">Loading globe…</p>}>
              <Travel />
            </Suspense>
          }
        />
        <Route path="/visitors" element={null} />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
