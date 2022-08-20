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
          flexGrow: 8,
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
          display: "flex",
          alignContent: "center",
          justifyContent: "space-between",
          flexGrow: 1,
        }}>
          <Image
            src="/images/instagram.png"
            alt="instagram"
            width="35"
            height="35"
            onClick={handleOpen}
          />
          <Link href="/mypage/edit/profile">
            <div style={{ 
              background: "rgb(255,192,144) linear-gradient(45deg, rgba(255,192,144,1) 0%, rgba(177,215,180,1) 81%, rgba(127,183,126,1) 100%)",
              borderRadius: '100%', 
              width: '35px',
              height: '35px',
            }}>
              <BiEditAlt color="white" size={25} style={{
                position: "relative",
                margin: 0,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}/>
            </div>
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
