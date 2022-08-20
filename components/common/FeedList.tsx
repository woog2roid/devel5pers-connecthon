import Image from 'next/image';
import styled from '@emotion/styled';
import { userImages } from '../../data/feedImages';

interface IProps {
  images: string[];
}

const FeedList = ({images}: IProps) => {
  return (
    <FeedOfImages>
      {images.map((item, i) => {
        return (
          <Image
            key={i}
            src={item}
            alt="hot feed images"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '0.5rem',
            }}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        );
      })}
    </FeedOfImages>
  );
};

export default FeedList;

const FeedOfImages = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: 0.5rem;
  border-radius: 0.5rem;
  & > span {
    flex-shrink: 0;
  }
`;
