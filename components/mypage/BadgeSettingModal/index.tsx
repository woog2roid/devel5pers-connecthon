import CustomModal from '../../common/CustomModal';
import BadgeList from '../BadgeList';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import {
  getBadgesByUserId,
  getRepresentativeBadges,
} from '../../../apis/profile';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userState from '../../../store/user';
import { badgeListState, mainBadgeListState } from '../../../store/badge';
import { COLORS } from '../../../styles/palette';
import { useState } from 'react';

const BadgeSettingModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const [loading, setLoading] = useState(false);
  const user = useRecoilValue(userState);
  const setMainBadgeList = useSetRecoilState(mainBadgeListState);
  const setBadgeList = useSetRecoilState(badgeListState);
  const onSave = async () => {
    const result1 = await getRepresentativeBadges(user!.id);
    setMainBadgeList(result1);
    const result2 = await getBadgesByUserId(user!.id);
    setBadgeList(result2);
  };
  const onClose = async () => {
    handleClose();
  };
  const onClick = () => {
    setLoading(true);
    onSave();
    setLoading(false);
    alert('저장되었습니다!');
  };
  return (
    <CustomModal open={open} handleClose={onClose}>
      <Wrapper>
        <h2>대표 뱃지 설정</h2>
        <BadgeList cursor={true} />
        <Button
          variant="contained"
          disabled={loading ? true : false}
          onClick={onClick}
        >
          {loading ? '저장되는 중...' : '저장하기'}
        </Button>
      </Wrapper>
    </CustomModal>
  );
};

export default BadgeSettingModal;

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 350px;
  width: 90vw;
  h2 {
    color: ${COLORS.green};
  }
`;
