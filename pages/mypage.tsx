import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Profile from '../components/mypage/Profile';
import sessionState from '../store/session';
import userState from '../store/user';
import { getUser } from '../apis/auth';
import { User } from '@supabase/supabase-js';

export const MyPage = () => {
  const [user, setUser] = useRecoilState<User | null>(userState);
  const session = useRecoilValue(sessionState);

  useEffect(() => {
    const data = getUser();
    setUser(data);
  }, [session]);

  return (
    <Profile
      avatarUrl={user?.user_metadata.avatar_url}
      name={user?.user_metadata.name}
    />
  );
};

export default MyPage;
