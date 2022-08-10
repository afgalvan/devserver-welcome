import { createTheme } from '@nextui-org/react';
import { useState } from 'react';

export const useTheme = (initialTheme = 'dark') => {
  const [type, setType] = useState(initialTheme);
  const toggleTheme = () => setType(type == 'dark' ? 'light' : 'dark');
  const theme = createTheme({ type });
  return { theme, toggleTheme };
};
