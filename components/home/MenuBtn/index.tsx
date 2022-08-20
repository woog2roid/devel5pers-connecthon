import { Row, Wrapper } from './style';
import { Newspaper, LocalMall, Campaign, MenuBook } from '@mui/icons-material';

interface IProp {
  name: string;
}

export default function MenuBtn({ name }: IProp) {
  const sx = {};

  return (
    <>
      <Row>
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
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
              }}
            >
              {name === '뉴스' ? (
                <Newspaper sx={{ color: 'white' }} />
              ) : name === '도서관' ? (
                <MenuBook sx={{ color: 'white' }} />
              ) : name === '캠페인' ? (
                <Campaign sx={{ color: 'white' }} />
              ) : name === '스토어' ? (
                <LocalMall sx={{ color: 'white' }} />
              ) : (
                <></>
              )}
            </div>
          </Wrapper>
        </div>
        <span style={{ fontFamily: 'NotoSans' }}>{name}</span>
      </Row>
    </>
  );
}
