import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getProfile, updateProfile } from '../../../apis/profile';
import userState from '../../../store/user';
import { definitions } from '../../../types/supabase';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProfileEdit = () => {
  const user = useRecoilValue(userState);
  const [profile, setProfile] = useState<definitions['profiles']>();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      setProfile((await getProfile(user?.id ?? ''))[0]);
    })();
  }, [setProfile]);

  const onDone = async () => {
    if (user !== null && profile !== undefined) {
      await updateProfile(profile, user?.id);
      router.push('/mypage');
    }
  };

  return (
    <Wrapper>
      {user ? (
        <>
          <Image
            src={user.user_metadata['avatar_url']}
            alt="user profile image"
            width="200"
            height="200"
          />
          <NameInput
            value={profile?.name}
            onChange={(e) => {
              if (profile !== undefined) {
                const newProfile = {
                  ...profile,
                  name: e.target.value,
                };
                setProfile(newProfile);
              }
            }}
          />
          <button
            onClick={onDone}
            style={{
              margin: '5px',
              backgroundColor: 'lime',
            }}
          >
            DummyOnDone
          </button>
        </>
      ) : (
        'Please Log in'
      )}
    </Wrapper>
  );
};

export default ProfileEdit;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 5rem;
`;

const NameInput = styled.input`
  width: 15rem;
  border-bottom: 1px solid grey;
  border-top-style: hidden;
  border-left-style: hidden;
  border-right-style: hidden;
  margin-top: 10rem;

  &:focus {
    outline: none;
  }
`;
