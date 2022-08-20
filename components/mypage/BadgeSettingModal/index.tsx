import CustomModal from '../../common/CustomModal';
import BadgeList from '../BadgeList';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { getRepresentativeBadges } from '../../../apis/profile';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import userState from '../../../store/user';
import { mainBadgeListState } from '../../../store/badge';

const BadgeSettingModal = ({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const user = useRecoilValue(userState);
  const setMainBadgeList = useSetRecoilState(mainBadgeListState);
  const onClose = async () => {
    const result = await getRepresentativeBadges(user!.id);
    setMainBadgeList(result);
    handleClose();
  };
  return (
    <CustomModal open={open} handleClose={onClose}>
      <Wrapper>
        <h2>대표 뱃지 설정</h2>
        <BadgeList cursor={true} />
        <Button variant="contained">저장하기</Button>
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
`;
