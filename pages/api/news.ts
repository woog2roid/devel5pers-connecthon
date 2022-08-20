import axios from 'axios';
import { NextApiHandler } from 'next';

const getNews: NextApiHandler = async (request, response) => {
  if (request.method === 'GET') {
    const query = Buffer.from('환경', 'utf8').toString();
    const result = await axios.get(
      encodeURI(
        `https://openapi.naver.com/v1/search/news.json?query=${query}&sort=sim`,
      ),
      {
        headers: {
          'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID ?? '',
          'X-Naver-Client-Secret':
            process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET ?? '',
        },
      },
    );
    response.status(200).json(result.data);
  }
};

export default getNews;
