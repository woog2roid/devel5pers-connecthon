import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem';
import INews from '../../../types/news';

const NewsList = () => {
  const [newsData, setNewsData] = useState<INews[]>([]);

  useEffect(() => {
    const getNews = async (): Promise<void> => {
      const result = await axios.get('/api/getNews');
      setNewsData(result.data.items);
    };
    getNews();
  }, []);

  return (
    <>
      {newsData?.map((news, idx) => {
        return <NewsItem key={idx} news={news} />;
      })}
    </>
  );
};

export default NewsList;
