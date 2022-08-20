import { Row, Wrapper } from './style';
import { Newspaper, LocalMall, Campaign, MenuBook } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface IProp {
  name: string;
}

export default function MenuBtn({ name }: IProp) {
  const router = useRouter();

  const onClickNavButton = () => {
    if (name === '뉴스') {
      router.push('./news');
    } else if (name === '도서관') {
      router.push('./library');
    } else if (name === '캠페인') {
      router.push('./campaign');
    } else if (name === '스토어') {
      router.push('./store');
    }
  };

  return (
    <>
      <Row>
        <div
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}
        >
          <Wrapper onClick={onClickNavButton}>
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
