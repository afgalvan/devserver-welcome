import { Grid, Switch, Text, Tooltip } from '@nextui-org/react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

export interface HeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <Grid.Container justify="space-between" alignItems="center">
      <Text h3>Development Server</Text>
      <Tooltip content="Toggle theme" placement="bottom">
        <Switch
          shadow
          onChange={toggleTheme}
          size="sm"
          iconOff={<MoonIcon filled />}
          iconOn={<SunIcon filled />}
          checked={true}
        ></Switch>
      </Tooltip>
    </Grid.Container>
  );
};
