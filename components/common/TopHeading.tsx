import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { FiChevronLeft } from 'react-icons/fi';
import { COLORS } from '../../styles/palette';
const TopHeading = ({ title, to }: { title: string; to: string }) => {
  const router = useRouter();
  return (
    <Heading>
      <FiChevronLeft onClick={() => router.push(to)} />
      <h2>{title}</h2>
    </Heading>
  );
};

export default TopHeading;

const Heading = styled.div`
  position: relative;
  text-align: center;
  h2 {
    color: ${COLORS.green};
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.5rem;
  }
`;
