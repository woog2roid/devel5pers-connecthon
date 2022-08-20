import { Divider } from '@mui/material';
import Link from 'next/link';
import FeedList from '../../common/FeedList';
import { Wrapper } from './style';

interface IProps {
  name: string;
  images: string[];
  url: string;
}

export default function HotFeed({ name, images, url }: IProps) {
  return (
    <div
      style={{
        overflow: 'hidden',
        marginBottom: '1.3rem',
      }}
    >
      <Wrapper>
        <span style={{ fontSize: '14px' }}>{name}</span>
        <Link href={url}>
          <a>
            <span style={{ color: 'gray', fontSize: '12px' }}>더보기</span>
          </a>
        </Link>
      </Wrapper>
      <FeedList images={images} />
    </div>
  );
}
