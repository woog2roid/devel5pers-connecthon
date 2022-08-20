import Image from 'next/image';
import { Wrapper } from './style';
import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { Badge } from '@mui/material';
import userState from '../../../store/user';
import {
  setRepresentativeBadge,
  unsetRepresentativeBadge,
} from '../../../apis/profile';
import IBadge from '../../../types/badge';

interface BadgeItemProps {
  badge: IBadge;
  cursor: boolean;
  main: boolean;
}

const BadgeItem = ({ badge, cursor, main }: BadgeItemProps) => {
  const user = useRecoilValue(userState);
  const { iconUrl, name, id } = badge.badges;
  const [toggle, setToggle] = useState<boolean>(badge.is_representative);
  const onToggle = () => {
    if (toggle) {
      unsetRepresentativeBadge(user!.id, id);
    } else {
      setRepresentativeBadge(user!.id, id);
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
      <Badge badgeContent={badge.count} color="info">
        <Image
          src={iconUrl === undefined ? '' : iconUrl}
          alt="Badge Image"
          style={{
            borderRadius: '50%',
            display: 'block',
          }}
          width={100}
          height={100}
        />
      </Badge>
      <div className="title">{name}</div>
      <AiOutlineCheckCircle />
    </Wrapper>
  );
};

export default BadgeItem;
