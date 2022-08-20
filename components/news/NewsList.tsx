import { useEffect } from 'react';
import axios from 'axios';

interface NewsType {
  title: string;
  link: string;
  description: string;
}

const NewsList = () => {
  const getNews = async (): Promise<NewsType> => {
    const data = (await axios.get('/api/getNews')).data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
};

export default NewsList;
