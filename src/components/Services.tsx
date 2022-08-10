import { Dropdown, Grid, Progress, Spacer, Text } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import Krakend from '../assets/krakend.jpg';
import Mysql from '../assets/mysql.png';
import Postgres from '../assets/postgresql.png';
import ReactIcon from '../assets/react.png';
import Vault from '../assets/vault.png';
import { Service, ServiceCard } from './Service';

const services: Service[] = [
  {
    icon: Krakend,
    name: 'SLPlus API',
    type: 'API Gateway (Krakend)',
    runningOn: 'http://api.devserver.local/',
  },
  {
    icon: ReactIcon,
    name: 'Welcome page',
    type: 'Website',
    runningOn: 'http://devserver.local',
  },
  {
    icon: Vault,
    name: 'Hashicorp Vault',
    type: 'SSM',
    runningOn: 'http://vault.devserver.local',
  },
  {
    icon: Mysql,
    name: 'MySQL',
    type: 'Database',
    runningOn: 'http://mysql.devserver.local:3306',
  },
  {
    icon: Postgres,
    name: 'PostgreSQL',
    type: 'Database',
    runningOn: 'http://postresql.devserver.local:5432',
    down: true,
  },
];

export const ServiceList = () => {
  return (
    <Grid.Container gap={3}>
      {services.map((s) => (
        <Grid xs={6} key={s.name}>
          <ServiceCard {...s} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export const Services = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Grid.Container alignItems="center" justify="center">
      <Grid sm={12}>
        <Text h4>Services</Text>
        <Spacer />
        <Dropdown>
          <Dropdown.Button flat>Filter</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item key="all">All</Dropdown.Item>
            <Dropdown.Item key="running" color="success">
              Running
            </Dropdown.Item>
            <Dropdown.Item key="stopped" color="error">
              Stopped
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
      {loading ? (
        <Grid sm={6}>
          <Progress
            indeterminated
            value={30}
            shadow
            color="secondary"
            status="secondary"
          />
        </Grid>
      ) : (
        <ServiceList />
      )}
    </Grid.Container>
  );
};
