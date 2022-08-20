import { useEffect, useState } from 'react';
import { definitions } from '../types/supabase';
import { getPostsByCategory } from '../apis/post';
import styled from '@emotion/styled';
import Link from 'next/link';
import LibraryItem from '../components/library/LibraryItem';
import CustomHead from '../components/common/CustomHead';
import TopHeading from '../components/common/TopHeading';

const Library = () => {
  const [data, setData] = useState<definitions['posts'][]>();

  const fetchData = async () => {
    setData(await getPostsByCategory('library'));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomHead title="도서관 | AimEco" />
      <Wrapper>
        <TopHeading title="도서관" to="/" />
        <LibraryListWrapper>
          {data?.map((it, idx) => (
            <Link key={idx} href={`/library/${it.id}`}>
              <a>
                <LibraryItem src={it.image[0] as string} />
              </a>
            </Link>
          ))}
        </LibraryListWrapper>
      </Wrapper>
    </>
  );
};

export default Library;

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const LibraryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
`;
