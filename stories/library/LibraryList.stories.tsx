import LibraryList from '../../components/library/LibraryList';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'LibraryList',
  component: LibraryList,
} as ComponentMeta<typeof LibraryList>;

export const Primary: ComponentStory<typeof LibraryList> = () => (
  <LibraryList
    imageUrlList={[
      "http://localhost:3000/images/libraries/1/1.png",
      "http://localhost:3000/images/libraries/2/1.png",
    ]}
  />
);
