import React from 'react';
import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import { MdClose } from 'react-icons/md';

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ children, open, handleClose }: CustomModalProps) => {
  return (
    <Modal open={open}>
      <Box>
        <CloseButton onClick={handleClose}>
          <MdClose />
        </CloseButton>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  box-shadow: 1px 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  svg {
    font-size: 1.5rem;
  }
`;
