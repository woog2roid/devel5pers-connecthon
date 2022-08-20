import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import LoginForm from '../components/home/login/LoginForm';
import sessionState from '../store/session';
import { getSession } from '../apis/auth';
import { supabase } from '../utils/supabase';
import Events from '../components/home/Events';
import MenuBtnList from '../components/home/MenuBtnList';

const Home: NextPage = () => {
  const [session, setSession] = useRecoilState(sessionState);
  useEffect(() => {
    const data = getSession();
    setSession(data);
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, [setSession]);
  return (
    <>
      {!session ? (
        <LoginForm />
      ) : (
        <>
          <Events />
          <MenuBtnList />
        </>
      )}
    </>
  );
};

export default Home;
