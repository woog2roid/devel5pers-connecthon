import Image from 'next/image';
import { Wrapper } from './style';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import userState from '../../../store/user';
import {
  setRepresentativeBadge,
  unsetRepresentativeBadge,
} from '../../../apis/profile';

const BadgeItem = ({ badge, cursor, is_representative, main }: any) => {
  const user = useRecoilValue(userState);
  const { iconUrl, name } = badge;
  const [toggle, setToggle] = useState<boolean>(is_representative);
  const onToggle = () => {
    if (toggle) {
      unsetRepresentativeBadge(user!.id, badge.id);
    } else {
      setRepresentativeBadge(user!.id, badge.id);
    }
    setToggle((toggle) => !toggle);
  };

  return (
    <Wrapper
      style={{ cursor: cursor ? 'pointer' : 'auto' }}
      onClick={onToggle}
      cursor={cursor}
      toggle={toggle}
      main={main}
    >
      <Image
        src={iconUrl}
        alt="Badge Image"
        style={{
          borderRadius: '50%',
          display: 'block',
        }}
        width={100}
        height={100}
      />
      <div className="title">{name}</div>
      <AiOutlineCheckCircle />
    </Wrapper>
  );
};

export default BadgeItem;
