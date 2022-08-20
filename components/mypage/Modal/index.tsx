import { modalStyle } from './style';
import { useState } from 'react';
import { Modal, Box } from '@mui/material';

interface propsType {
  open: boolean;
  handleClose: () => void;
}

const ModalComponent = ({ open, handleClose }: propsType) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}></Box>
    </Modal>
  );
};

export default ModalComponent;
