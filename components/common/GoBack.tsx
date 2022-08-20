import styled from '@emotion/styled';
import { ArrowBackOutlined } from '@material-ui/icons';
import Link from 'next/link';

const GoBack = ({ targetLink }: { targetLink: string }) => (
  <Link href={targetLink}>
    <a>
      <GoBackWrapper>
        <ArrowBackOutlined />
      </GoBackWrapper>
    </a>
  </Link>
);

export default GoBack;

const GoBackWrapper = styled.div`
  background-color: grey;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-items: space-between;
  margin: 0 10px;
  border-radius: 100%;
`;
