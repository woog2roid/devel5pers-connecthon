import BadgeItem from '../components/badge/BadgeItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Badge',
  component: BadgeItem,
} as ComponentMeta<typeof BadgeItem>;

export const Primary: ComponentStory<typeof BadgeItem> = () => (
  <BadgeItem id={1} url={'/images/newbie'} name={'첫 발걸음'} />
);
