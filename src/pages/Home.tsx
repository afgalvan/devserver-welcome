import { Container, Spacer } from '@nextui-org/react';

import { Header, HeaderProps } from '../components/Header';
import { Services } from '../components/Services';
import { Welcome } from '../components/Welcome';

export const Home = (props: HeaderProps) => {
  return (
    <Container>
      <Header {...props} />
      <hr />
      <Spacer y={3} />
      <Welcome />
      <Services />
    </Container>
  );
};
