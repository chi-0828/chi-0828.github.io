import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Menu, X } from 'lucide-react';
import { PROFILE } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light text-slate-800">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 h-full flex-shrink-0 z-20">
        <Sidebar className="w-80" />
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Drawer) */}
      <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <button 
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600"
            onClick={() => setIsMobileMenuOpen(false)}
        >
            <X size={24} />
        </button>
        <Sidebar onNavClick={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Mobile Header */}
        <header className="md:hidden flex items-center justify-between px-4 py-3 bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-30 h-16">
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-1 text-slate-600 hover:bg-slate-100 rounded-md"
            >
                <Menu size={24} />
            </button>
            <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 tracking-tight">{PROFILE.name}</span>
            </div>
            {/* Spacer for alignment */}
            <div className="w-8"></div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth p-4 md:p-8">
            {children}
            <footer className="mt-16 pt-8 pb-12 border-t border-slate-200 text-center">
                <p className="text-slate-400 text-xs font-mono">
                    © 2026 {PROFILE.name}. Built with Tailwind CSS and React.
                </p>
            </footer>
        </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;