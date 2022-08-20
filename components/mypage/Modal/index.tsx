import { modalStyle, Row, ProfileWrapper, CustomedChip, Spacer } from './style';
import { Box, Divider, Chip } from '@mui/material';
import { useRecoilValue } from 'recoil';
import userState from '../../../store/user';
import { badgeListState } from '../../../store/badge';
import MainBadgeList from '../MainBadgeList';
import Image from 'next/image';
import CustomModal from '../../common/CustomModal';

interface propsType {
  avatarUrl: string;
  open: boolean;
  handleClose: () => void;
}

const ModalComponent = ({ open, handleClose, avatarUrl }: propsType) => {
  const user = useRecoilValue(userState);
  const badges = useRecoilValue(badgeListState);

  //const chipLabel = `총 뱃지 수: ${badges?.length}개`;
  const chipLabel = `대표 배지`;
  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box sx={modalStyle}>
        <div>
          <ProfileWrapper>
            <div
              style={{
                marginRight: '10px',
              }}
            >
              <Image
                src={avatarUrl}
                alt="user profile"
                width="60%"
                height="60%"
              />
            </div>
            <Row>
              <div>
                <h3>{user?.user_metadata.name}</h3>
              </div>
              <p>팔로워 0 팔로잉 0</p>
            </Row>
          </ProfileWrapper>
          <Spacer />
          <Divider>
            <CustomedChip label={chipLabel} sx={{ fontFamily: 'NotoSans' }} />
          </Divider>
          <Spacer />
          <MainBadgeList size={30} />
        </div>
      </Box>
    </CustomModal>
  );
};

export default ModalComponent;
