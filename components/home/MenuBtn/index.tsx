import { IMenuBtn } from '../../../types/menuBtn';
import { Row, Wrapper } from './style';
import Link from 'next/link';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Newspaper, LocalMall, Campaign, MenuBook } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface IProp {
  btn: IMenuBtn;
}

const Dialog = styled.div`
  display: flex;
  width: 180px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.5);
`;

export default function MenuBtn({ btn }: IProp) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  const sx = {};

  return (
    <>
      <Row>
        <Link href={btn.link}>
          <a>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <Wrapper>
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    backgroundColor: '#7FB77E',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '2px'
                  }}
                >
                  {btn.name === '뉴스' ? (
                    <Newspaper sx={{ color: 'white', fontSize: 40 }} />
                  ) : btn.name === '도서관' ? (
                    <MenuBook sx={{ color: 'white', fontSize: 40 }} />
                  ) : btn.name === '캠페인' ? (
                    <Campaign sx={{ color: 'white', fontSize: 40 }} />
                  ) : btn.name === '스토어' ? (
                    <LocalMall sx={{ color: 'white', fontSize: 40 }} />
                  ) : (
                    <></>
                  )}
                </div>
              </Wrapper>
            </div>
            <div style={{ fontFamily: 'NotoSans', textAlign: 'center' }}>
              {btn.name}
            </div>
          </a>
        </Link>
      </Row>
    </>
  );
}
