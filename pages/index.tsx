import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import LoginForm from '../components/login/LoginForm';
import sessionState from '../store/session';
import { getSession } from '../apis/auth';

const Home: NextPage = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    setSession(getSession());
  }, [setSession]);
  return <>{!session ? <LoginForm /> : 'Hello, World!'}</>;
};

export default Home;
