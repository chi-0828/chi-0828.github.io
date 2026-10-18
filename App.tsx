import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { PROFILE } from './constants';

// Travel pulls in three.js — load it only when the route is visited.
const Travel = lazy(() => import('./pages/Travel').then((m) => ({ default: m.Travel })));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <main className="flex-1 w-full">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {children}
      </div>
    </main>
    <footer className="border-t border-line">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-xs text-faint">© 2026 {PROFILE.name}</p>
      </div>
    </footer>
  </div>
);

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publications" element={<Publications />} />
        <Route
          path="/travel"
          element={
            <Suspense fallback={<p className="text-sm text-muted py-20 text-center">Loading globe…</p>}>
              <Travel />
            </Suspense>
          }
        />
      </Routes>
    </Layout>
  </HashRouter>
);

export default App;
