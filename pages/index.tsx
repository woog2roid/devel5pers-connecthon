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
<<<<<<< HEAD
    const data = getSession();
    setSession(data);
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(_event);
      setSession(session);
    });
  }, []);
=======
    setSession(getSession());
  }, [setSession]);
>>>>>>> b0529d99862dd922b29dab835de2d1a93cb13a0d
  return <>{!session ? <LoginForm /> : 'Hello, World!'}</>;
};

export default Home;
