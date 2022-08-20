import styled from '@emotion/styled';

interface ProfileProps {
  avatarUrl: string;
  name: string;
}

const Profile = ({ avatarUrl, name }: ProfileProps) => {
  return (
    <Wrapper>
      <img
        src={avatarUrl ? avatarUrl : '/images/user-default.png'}
        alt="user profile"
      />
      <div>
        <p>{name}</p>
        <p>팔로워 0 팔로잉 0</p>
      </div>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  display: flex;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;
