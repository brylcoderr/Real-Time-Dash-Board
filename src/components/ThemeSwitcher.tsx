import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, setThemeByName, availableThemes } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Palette className={`${theme.primary} w-5 h-5`} />
      <select
        value={theme.name.toLowerCase()}
        onChange={(e) => setThemeByName(e.target.value)}
        className={`${theme.card} ${theme.text} ${theme.border} border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        {availableThemes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}