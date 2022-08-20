import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CustomHead from '../components/common/CustomHead';
import TopHeading from '../components/common/TopHeading';
import NewFeed from '../components/newFeed';
import styled from '@emotion/styled';

export default function NewFeedPage() {
  const router = useRouter();
  const title = router.query.title as string;
  return title ? (
    <>
      <CustomHead title={`${title} | AimEco`} />
      <Wrapper>
        <TopHeading title={title} to={'/'} />
        <FeedWrapper>
          <NewFeed />
        </FeedWrapper>
      </Wrapper>
    </>
  ) : null;
}

const Wrapper = styled.div`
  padding: 1rem 0;
`;

const FeedWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
