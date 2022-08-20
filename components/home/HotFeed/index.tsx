import { Divider } from '@mui/material';
import { Wrapper } from './style';
import Link from 'next/link';
import FeedList from '../../common/FeedList';

interface IProps {
  name: string;
}

export default function HotFeed({ name }: IProps) {
  return (
    <div
      style={{
        overflow: 'hidden',
        marginBottom: '1.3rem',
      }}
    >
      <Wrapper>
        <span style={{ fontSize: '14px' }}>{name}</span>
        <Link href="/new-feed-page">
          <a>
            <span style={{ color: 'gray', fontSize: '12px' }}>더보기</span>
          </a>
        </Link>
      </Wrapper>
      <FeedList />
    </div>
  );
}
