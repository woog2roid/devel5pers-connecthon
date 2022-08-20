import Image from 'next/image';
import { Wrapper } from './style';
import IBadge from '../../../types/badge';

const BadgeItem = ({ id, url, name }: IBadge) => {
  return (
    <Wrapper>
      <Image
        src={url}
        alt="Badge Image"
        style={{
          borderRadius: '50%',
          display: 'block',
          boxShadow: '1px 5px 10px rgba(0,0,0,0.5)',
        }}
        width={100}
        height={100}
      />
      <div className="title">{name}</div>
    </Wrapper>
  );
};

export default BadgeItem;
