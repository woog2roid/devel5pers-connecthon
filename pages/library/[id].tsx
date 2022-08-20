import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { definitions } from '../../types/supabase';
import { getPostById } from '../../apis/post';
import LibraryItem from '../../components/library/LibraryItem';
import GoBack from '../../components/common/GoBack';
import styled from '@emotion/styled';

const LibraryDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<definitions['posts']>();

  const fetchData = async (id: number) => {
    setData((await getPostById(id))[0]);
  };
  useEffect(() => {
    fetchData(parseInt((id as string) ?? '0'));
  }, [id]);

  return (
    <LibraryListWrapper>
      {data?.image.map((it, idx) => {
        return <LibraryItem key={idx} src={it as string} />;
      })}
      <GoBack targetLink="/library" />
    </LibraryListWrapper>
  );
};

export default LibraryDetail;

const LibraryListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 1.5rem 0;
`;
