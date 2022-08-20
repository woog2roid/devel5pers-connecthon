import { HeatMapGrid } from 'react-grid-heatmap';
import styled from '@emotion/styled';

const xLabels = new Array(30).fill(0).map((_, i) => `${i + 1}`);
const yLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const data = new Array(yLabels.length)
  .fill(0)
  .map(() =>
    new Array(xLabels.length)
      .fill(0)
      .map(() => Math.floor(Math.random() * 100)),
  );

const ProofStats = () => {
  return (
    <Wrapper>
      <HeatMapGrid
        data={data}
        xLabels={xLabels}
        yLabels={yLabels}
        xLabelsStyle={(index) => ({
          color: index % 2 ? 'transparent' : '#777',
          fontSize: '0.6rem',
        })}
        yLabelsStyle={() => ({
          fontSize: '0.6rem',
          textTransform: 'uppercase',
          color: '#777',
        })}
        cellStyle={(_x, _y, ratio) => ({
          background: `rgb(12, 160, 44, ${ratio})`,
          color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        })}
        cellHeight="1.1rem"
        xLabelsPos="bottom"
        square
      />
    </Wrapper>
  );
};
export default ProofStats;

const Wrapper = styled.div`
  overflow-x: scroll;
`;
