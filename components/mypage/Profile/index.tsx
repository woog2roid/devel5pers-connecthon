import styled from '@emotion/styled';
import { BiEditAlt } from 'react-icons/bi';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '../Modal';
import Link from 'next/link';

interface ProfileProps {
  avatarUrl: string;
  name: string;
}

const Profile = ({ avatarUrl, name }: ProfileProps) => {
  //modal 구현
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper>
        <div style={{
          display: "flex",
          alignItems: "center",
          flexGrow: 3,
        }}>
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
          <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignContent: "center",
          }}>
            <h3>{name}</h3>
            <p>팔로워 0 팔로잉 0</p>
          </div>
        </div>
        <div style={{
          width: "30%",
          display: "flex",
          alignContent: "center",
          justifyContent: "flex-end",
          flexGrow: 1,
        }}>
          <Image
            src="/images/instagram.png"
            alt="instagram"
            width="50"
            height="50"
            onClick={handleOpen}
          />
          <Link href="/mypage/edit/profile">
            <BiEditAlt size={50} />
          </Link>
        </div>
      </Wrapper>
      <Modal
        open={open}
        handleClose={handleClose}
        avatarUrl={avatarUrl ? avatarUrl : '/images/user-default.png'}
      />
    </>
  );
};

export default Profile;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
  }
`;
