import Image from 'next/image';
import { Wrapper } from './style';
import IBadge from '../../../types/badge';

const BadgeItem = ({ id, url, name }: IBadge) => {
  return (
    <Wrapper>
      <Image
        src={url}
        alt="Badge Image"
        style={{ borderRadius: '50%', display: 'block' }}
        width={100}
        height={100}
      />
      <div className="title">{name}</div>
    </Wrapper>
  );
};

export default BadgeItem;
