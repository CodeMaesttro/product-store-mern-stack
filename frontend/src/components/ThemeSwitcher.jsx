import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme(); // ✅ add setTheme here
  console.log(theme === "dark");

  return (
    <div>
      <div>
        {
          theme === "light" ? (
            <SunIcon
              size={18}
              className="p-1 bg-gray-600 rounded shadow-xl cursor-pointer"
              onClick={() => setTheme('dark')}
            />
          ) : (
            <MoonIcon
              size={18}
              className="p-1 bg-gray-600 rounded shadow-xl cursor-pointer"
              onClick={() => setTheme('light')} // You can toggle back to light
            />
          )
        }
      </div>
    </div>
  );
}

export default ThemeSwitcher;
