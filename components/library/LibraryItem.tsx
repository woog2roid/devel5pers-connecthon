import Image from 'next/image';
import styled from '@emotion/styled';

interface LibraryItemProps {
  src: string;
}

const LibraryItem = ({ src }: LibraryItemProps) => (
  <ItemWrapper>
    <Image src={src} alt="library thumbnail" width="300" height="300" />
  </ItemWrapper>
);

export default LibraryItem;

const ItemWrapper = styled.div`
  border-radius: 16px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 5px;
`;
