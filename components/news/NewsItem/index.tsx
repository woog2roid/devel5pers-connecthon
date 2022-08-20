import INews from '../../../types/news';
import { Wrapper } from './style';
import { convert } from 'html-to-text';

interface propsType {
  news: INews;
}

const NewsItem = ({ news }: propsType) => {
  const { title, link, description } = news;
  const convertedTitle = convert(title);

  const convertedDescription = convert(description);
  const shortDescription = convertedDescription.slice(0, 90) + '...';

  return (
    <Wrapper href={link} target="_blank" rel="noreferrer">
      <div className="title">{convertedTitle}</div>
      <div className="description">{shortDescription}</div>
    </Wrapper>
  );
};

export default NewsItem;
