'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type NavContextType = {
  activeArticle: string | null;
  setActiveArticle: (id: string | null) => void;
};

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [activeArticle, setActiveArticle] = useState<string | null>(null);

  // Sync hash to state on mount and on hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        setActiveArticle(hash);
      } else {
        setActiveArticle(null);
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Wrap setActiveArticle to update the hash
  const updateActiveArticle = (id: string | null) => {
    if (id) {
      window.location.hash = id;
    } else {
      // Remove hash without scrolling
      history.replaceState(null, '', window.location.pathname);
      setActiveArticle(null);
    }
  };

  return (
    <NavContext.Provider value={{ activeArticle, setActiveArticle: updateActiveArticle }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
}
