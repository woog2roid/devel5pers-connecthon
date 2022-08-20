import { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem';
import INews from '../../../types/news';
import styled from '@emotion/styled';
import { Row } from './style';
import { CircularProgress } from '@mui/material';

const NewsList = () => {
  const [newsData, setNewsData] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getNews = async (): Promise<void> => {
      const result = await axios.get('/api/news');
      setNewsData(result.data.items);
      setIsLoading(true);
    };
    getNews();
  }, []);

  return (
    <>
      {isLoading ? (
        newsData?.map((news, idx) => (
          <Row key={idx}>
            <NewsItem news={news} />
          </Row>
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <CircularProgress color="inherit" />
        </div>
      )}
    </>
  );
};

export default NewsList;
