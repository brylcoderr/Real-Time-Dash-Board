import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg ${theme.card} ${theme.cardHover} ${theme.border} border`}
      aria-label="Toggle theme"
    >
      {theme.name === 'light' ? (
        <Moon className={theme.textSecondary} size={20} />
      ) : (
        <Sun className={theme.textSecondary} size={20} />
      )}
    </button>
  );
}