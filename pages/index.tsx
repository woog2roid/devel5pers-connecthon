import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import LoginForm from '../components/login/LoginForm';
import sessionState from '../store/session';
import { getSession } from '../apis/auth';
import { supabase } from '../utils/supabase';

const Home: NextPage = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    const data = getSession();
    setSession(data);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);
  return <>{!session ? <LoginForm /> : 'Hello, World!'}</>;
};

export default Home;
