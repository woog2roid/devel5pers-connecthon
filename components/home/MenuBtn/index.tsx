import { Row, Wrapper } from './style';

interface IProp {
  name: string;
}

export default function MenuBtn({ name }: IProp) {
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
              }}
            />
          </Wrapper>
        </div>
        <span style={{ fontFamily: 'NotoSans' }}>{name}</span>
      </Row>
    </>
  );
}
