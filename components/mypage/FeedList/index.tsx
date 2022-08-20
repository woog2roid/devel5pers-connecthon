import { FiChevronRight } from 'react-icons/fi';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import userState from '../../../store/user';
import { useEffect, useState } from 'react';
import { getBadgesByUserId } from '../../../apis/profile';

const FeedList = () => {
  const user = useRecoilValue(userState);
  const [loading, setLoading] = useState(false);
  const [badgeList, setBadgeList] = useState([]);
  const getBadgeList = async () => {
    setLoading(true);
    if (user !== null) {
      const result: any = await getBadgesByUserId(user?.id);
      setBadgeList(result);
      console.log(result);
    }
    setLoading(false);
  };
  useEffect(() => {
    getBadgeList();
  }, []);
  return (
    <div>
      <Heading>
        <h3>피드</h3>
        <FiChevronRight />
      </Heading>
      <ul>
        {loading ? (
          <Wrapper>
            <p>Loading...</p>
          </Wrapper>
        ) : (
          <div>
            {badgeList.length === 0 ? (
              <Wrapper>
                <p>피드가 없습니다.</p>
              </Wrapper>
            ) : (
              <p></p>
            )}
          </div>
        )}
      </ul>
    </div>
  );
};

export default FeedList;

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
  svg {
    margin-top: 0.3rem;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
`;
