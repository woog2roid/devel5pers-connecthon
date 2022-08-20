import BadgeItem from '../components/mypage/BadgeItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Badge',
  component: BadgeItem,
} as ComponentMeta<typeof BadgeItem>;

export const Primary: ComponentStory<typeof BadgeItem> = () => (
  <BadgeItem
    id={1}
    iconUrl={'http://localhost:3000/images/badge/welcome.png'}
    name={'첫 발걸음'}
  />
);
