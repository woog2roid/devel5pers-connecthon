import Image from 'next/image';
import styled from '@emotion/styled';

const images = [
  // 무지성..
  'https://cdn.shopify.com/s/files/1/0080/6381/1636/collections/INIKA-zero-waste-blog_1200x1200.jpg?v=1628092849',
  'https://www.psychologicalscience.org/redesign/wp-content/uploads/2016/08/PAFF_042417_motivatingecobehavior.jpg',
  'https://d2qgx4jylglh9c.cloudfront.net/kr/wp-content/uploads/2022/01/1216_posco_discharge_04.png',
  'https://betaimg-cdn.baemin.com/fw/ceoImage/2022/4/25/39932477_content.jpg',
  'https://betaimg-cdn.baemin.com/fw/ceoImage/2022/4/25/39932477_content.jpg',
  'https://betaimg-cdn.baemin.com/fw/ceoImage/2022/4/25/39932477_content.jpg',
];

const FeedList = () => {
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
