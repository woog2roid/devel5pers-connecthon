import { useEffect, useState } from 'react';
import { definitions } from '../types/supabase';
import { getPostsByCategory } from '../apis/post';
import styled from '@emotion/styled';
import Link from 'next/link';
import LibraryItem from '../components/library/LibraryItem';

const Library = () => {
  const [data, setData] = useState<definitions['posts'][]>();

  const fetchData = async () => {
    setData(await getPostsByCategory('library'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LibraryListWrapper>
      {data?.map((it, idx) => (
        <Link key={idx} href={`/library/${it.id}`}>
          <a>
            <LibraryItem src={it.image[0] as string} />
          </a>
        </Link>
      ))}
    </LibraryListWrapper>
  );
};

export default Library;

const LibraryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
