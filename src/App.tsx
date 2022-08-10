import { NextUIProvider } from '@nextui-org/react';

import { useTheme } from './hooks/useTheme';
import { Home } from './pages/Home';

export const App = () => {
  const { theme, toggleTheme } = useTheme('dark');
  return (
    <NextUIProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
    </NextUIProvider>
  );
};
