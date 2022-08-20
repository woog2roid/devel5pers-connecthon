import INews from '../../../types/news';
import { Wrapper } from './style';

interface propsType {
  news: INews;
}

const NewsItem = ({ news }: propsType) => {
  const { title, link, description } = news;

  return (
    <Wrapper href={link} target="_blank" rel="noreferrer">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </Wrapper>
  );
};

export default NewsItem;
