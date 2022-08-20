import { Divider } from '@mui/material';
import { FeedOfImages, Wrapper } from './style';
import Image from "next/image";
import Link from 'next/link';

interface IProps {
  name: string;
}

const images = [
  // 무지성..
  'https://cdn.shopify.com/s/files/1/0080/6381/1636/collections/INIKA-zero-waste-blog_1200x1200.jpg?v=1628092849',
  'https://www.psychologicalscience.org/redesign/wp-content/uploads/2016/08/PAFF_042417_motivatingecobehavior.jpg',
  'https://d2qgx4jylglh9c.cloudfront.net/kr/wp-content/uploads/2022/01/1216_posco_discharge_04.png',
  'https://betaimg-cdn.baemin.com/fw/ceoImage/2022/4/25/39932477_content.jpg',
];

export default function HotFeed({ name }: IProps) {
  return (
    <div
      style={{
        boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          marginTop: '30px',
          boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Divider />
        <Wrapper>
          <span style={{ fontSize: '14px' }}>🔥 {name}</span>
          <Link href='/new-feed-page'>
          <a>
          <span style={{ color: 'gray' }}>더보기</span>
          </a>
          </Link>
        </Wrapper>
        <Divider />
      </div>
      <FeedOfImages>
        {images.map((item, i) => {
          return (
            <Image
              key={i}
              src={item}
              alt="hot feed images"
              style={{ width: '120px', height: '100px', marginRight: '3px' }}
              width="100%"
              height="100%"
            />
          );
        }
        )}
      </FeedOfImages>
    </div>
  );

}
