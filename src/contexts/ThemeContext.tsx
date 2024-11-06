import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Theme } from '../types';

const themes: Record<string, Theme> = {
  light: {
    name: 'Light',
    background: 'bg-gray-50',
    card: 'bg-white',
    cardHover: 'hover:bg-gray-50',
    primary: 'text-blue-600',
    secondary: 'text-purple-600',
    text: 'text-gray-900',
    textSecondary: 'text-gray-500',
    border: 'border-gray-100',
    chartLine: '#6366F1',
    success: 'text-green-600',
    error: 'text-red-600'
  },
  dark: {
    name: 'Dark',
    background: 'bg-gray-900',
    card: 'bg-gray-800',
    cardHover: 'hover:bg-gray-700',
    primary: 'text-blue-400',
    secondary: 'text-purple-400',
    text: 'text-white',
    textSecondary: 'text-white',
    border: 'border-gray-700',
    chartLine: '#818CF8',
    success: 'text-green-400',
    error: 'text-red-400'
  },
  sunset: {
    name: 'Sunset',
    background: 'bg-orange-50',
    card: 'bg-white',
    cardHover: 'hover:bg-orange-50',
    primary: 'text-orange-600',
    secondary: 'text-pink-600',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    border: 'border-orange-100',
    chartLine: '#EA580C',
    success: 'text-teal-600',
    error: 'text-red-600'
  }
};

interface ThemeContextType {
  theme: Theme;
  setThemeByName: (name: string) => void;
  availableThemes: string[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(themes.light);

  const setThemeByName = (name: string) => {
    const newTheme = themes[name];
    if (newTheme) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setThemeByName,
      availableThemes: Object.keys(themes)
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}