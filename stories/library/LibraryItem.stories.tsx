import LibraryItem from '../../components/library/LibraryItem';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'LibraryItem',
  component: LibraryItem,
} as ComponentMeta<typeof LibraryItem>;

export const Primary: ComponentStory<typeof LibraryItem> = () => (
  <LibraryItem
    src="http://localhost:3000/images/libraries/1/1.png"
  />
);
