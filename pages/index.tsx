import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import LoginForm from '../components/home/login/LoginForm';
import sessionState from '../store/session';
import { getSession, getUser } from '../apis/auth';
import { supabase } from '../utils/supabase';
import Events from '../components/home/Events';
import MenuBtnList from '../components/home/MenuBtnList';
import TopBar from '../components/common/TopBar';
import HotFeed from '../components/home/HotFeed';
import CustomHead from '../components/common/CustomHead';
import userState from '../store/user';
import { campaignImages, userImages } from '../data/feedImages';

const Home: NextPage = () => {
  const [session, setSession] = useRecoilState(sessionState);
  const setUser = useSetRecoilState(userState);
  useEffect(() => {
    const data = getSession();
    setSession(data);
    setUser(getUser());
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(getUser());
    });
  }, [setSession]);
  return (
    <>
      <CustomHead title={'Welcome to AimEco :)'} />
      {!session ? (
        <LoginForm />
      ) : (
        <>
          <TopBar />
          <Events />
          <MenuBtnList />
          <HotFeed
            name={'🔥 인기 피드'}
            images={userImages}
            url={'/new-feed-page'}
          />
          <HotFeed
            name={'🌎 인기 환경 보호 챌린지'}
            images={campaignImages}
            url={'/'}
          />
        </>
      )}
    </>
  );
};

export default Home;
