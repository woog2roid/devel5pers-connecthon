import { modalStyle, Row, ProfileWrapper, CustomedChip } from './style';
import { useState } from 'react';
import { Modal, Box, Divider, Chip } from '@mui/material';
import { useRecoilValue } from 'recoil';
import userState from '../../../store/user';
import { badgeListState } from '../../../store/badge';
import MainBadgeList from '../MainBadgeList';
import Image from 'next/image';

interface propsType {
  open: boolean;
  handleClose: () => void;
}

const ModalComponent = ({ open, handleClose }: propsType) => {
  const user = useRecoilValue(userState);
  const badges = useRecoilValue(badgeListState);

  //const chipLabel = `총 뱃지 수: ${badges?.length}개`;
  const chipLabel = `대표 뱃지`;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <ProfileWrapper>
          <div
            style={{
              marginRight: '10px',
            }}
          >
            <Image
              src={
                user?.user_metadata?.avatarUrl
                  ? user?.user_metadata?.avatarUrl
                  : '/images/user-default.png'
              }
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
        <Divider>
          <CustomedChip label={chipLabel} />
        </Divider>

        <MainBadgeList size={30} />
      </Box>
    </Modal>
  );
};

export default ModalComponent;
