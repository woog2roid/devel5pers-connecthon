import { IMenuBtn } from '../../../types/menuBtn';
import { Row, Wrapper } from './style';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface IProp {
  btn: IMenuBtn;
}

const Dialog = styled.div`
  display: flex;
  width: 180px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.5);
`;

export default function MenuBtn({ btn }: IProp) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false);
  }


  return (
    <>
      <Row>
        { btn.link != '' ?
        (<Link href={btn.link}>
          <div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
            <Wrapper>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#7FB77E',
                }}
              />
            </Wrapper>
          </div>
        </Link>) :
        (<div
            style={{ display: 'flex', width: '100%', justifyContent: 'center' }} onClick={handleOpen}>
            <Wrapper>
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#7FB77E',
                }}
              />
            </Wrapper>
            <Modal
              open={isOpen}
              onClose={handleClose}
            >
              <Dialog>
                <p>준비 중입니다.</p>
              </Dialog>
            </Modal>
          </div>)}

        <span style={{ fontFamily: 'NotoSans' }}>{btn.name}</span>
      </Row>
    </>
  );
}
