import React, { createContext, useContext, useState } from 'react';
import type { Theme } from '../types';

const themes: Record<string, Theme> = {
  light: {
    name: 'light',
    background: 'bg-gray-50',
    card: 'bg-white',
    cardHover: 'hover:bg-gray-50',
    primary: 'text-blue-600',
    secondary: 'text-purple-600',
    text: 'text-gray-900',
    textSecondary: 'text-gray-500',
    border: 'border-gray-200',
    chartLine: 'stroke-blue-500',
    success: 'text-green-600',
    error: 'text-red-600'
  },
  dark: {
    name: 'dark',
    background: 'bg-gray-900',
    card: 'bg-gray-800',
    cardHover: 'hover:bg-gray-700',
    primary: 'text-blue-400',
    secondary: 'text-purple-400',
    text: 'text-white',
    textSecondary: 'text-gray-400',
    border: 'border-gray-700',
    chartLine: 'stroke-blue-400',
    success: 'text-green-400',
    error: 'text-red-400'
  }
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}