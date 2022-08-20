import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import LoginForm from '../components/home/login/LoginForm';
import sessionState from '../store/session';
import { getSession } from '../apis/auth';
import { supabase } from '../utils/supabase';
import Events from '../components/home/Events';
import MenuBtnList from '../components/home/MenuBtnList';
import TopBar from '../components/common/TopBar';
import HotFeed from '../components/home/HotFeed';
import CustomHead from '../components/common/CustomHead';

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
      <CustomHead title={'Welcome to AiMEco :)'} />
      {!session ? (
        <LoginForm />
      ) : (
        <>
          <TopBar />
          <Events />
          <MenuBtnList />
          <HotFeed name={'🔥 인기 피드'} />
          <HotFeed name={'🌍 인기 환경 보호 챌린지'} />
        </>
      )}
    </>
  );
};

export default Home;
