import { Card, Link, Popover, Radio, Text, User } from '@nextui-org/react';

export interface Service {
  icon: string;
  name: string;
  type: string;
  runningOn: string;
  down?: boolean;
}

export const ServiceCard = (props: Service) => (
  <Popover>
    <Popover.Trigger>
      <Card variant="bordered" isHoverable={true} css={{ cursor: 'pointer' }}>
        <Card.Body>
          <User
            bordered
            color={props.down ? 'error' : 'success'}
            src={props.icon}
            name={props.name}
            description={props.type}
          ></User>
        </Card.Body>
      </Card>
    </Popover.Trigger>
    <Popover.Content>
      <Radio.Group defaultValue="1" css={{ p: '$5' }}>
        <Radio value="1" color={props.down ? 'error' : 'success'} size="xs">
          <Text>
            {!props.down && 'Running at'}
            <Link target="_blank" href={props.runningOn} block icon>
              {props.runningOn}
            </Link>
          </Text>
        </Radio>
      </Radio.Group>
    </Popover.Content>
  </Popover>
);
