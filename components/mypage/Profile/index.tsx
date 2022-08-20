import styled from '@emotion/styled';
import { BiEditAlt } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileProps {
  avatarUrl: string;
  name: string;
}

const Profile = ({ avatarUrl, name }: ProfileProps) => {
  return (
    <Wrapper>
      <div
        style={{
          marginRight: '10px',
        }}
      >
        <Image
          src={avatarUrl ? avatarUrl : '/images/user-default.png'}
          alt="user profile"
          width="60%"
          height="60%"
        />
      </div>
      <Row>
        <div>
          <h3>{name}</h3>
          <Link href="/mypage/edit/profile">
            <BiEditAlt />
          </Link>
        </div>
        <p>팔로워 0 팔로잉 0</p>
      </Row>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;

const Row = styled.div`
  width: 100%;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
`;
