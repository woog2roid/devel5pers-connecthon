import GoBack from '../../components/common/GoBack';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'GoBack',
  component: GoBack,
} as ComponentMeta<typeof GoBack>;

export const Primary: ComponentStory<typeof GoBack> = () => (
  <GoBack targetLink="http://localhost:3000/images/libraries/1/1.png" />
);
