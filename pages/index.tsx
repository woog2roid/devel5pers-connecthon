import type { NextPage } from 'next';
import NewsList from '../components/news/NewsList';

const Home: NextPage = () => {
  return (
    <>
      Hello, World!
      <NewsList />
    </>
  );
};

export default Home;
