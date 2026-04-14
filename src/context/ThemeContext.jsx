import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light') setIsDark(false);
      else if (saved === 'dark') setIsDark(true);
      else setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } catch {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {}
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
