import Image from 'next/image';
import { Wrapper } from './style';
import IBadge from '../../../types/badge';

const BadgeItem = ({ id, url, name }: IBadge) => {
  return (
    <Wrapper>
      <Image
        src={url}
        alt="Badge Image"
        style={{ borderRadius: '50%' }}
        width={300}
        height={300}
      />
      <div className="title">{name}</div>
    </Wrapper>
  );
};

export default BadgeItem;
