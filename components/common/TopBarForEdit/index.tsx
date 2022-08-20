import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Wrapper } from './style';
import { FaSeedling } from 'react-icons/fa';
import { COLORS } from '../../../styles/palette';
import Link from 'next/link';

interface Props {
  onDone: () => void;
}
//depth가 깊지 않은, 즉, params가 없을 때의 TopBar
const TopBar = ({onDone} :Props) => {

  return (
    <Wrapper>
      <div className="title" style={{fontSize: "24px", color: `${COLORS.green}`}}>
        <FaSeedling style={{fontSize: 30, marginRight: "10px"}}/>
        A I M E C O
      </div>
      <div style={{marginRight: "3px"}}>
        <DoneOutlinedIcon
          onClick={onDone}
          sx={{ fontSize: 30, mr: '12px', mt: '2px', color: `${COLORS.orange}`, cursor: 'pointer' }}/>
        <Link href='/mypage'>
        <a>
        <CloseOutlinedIcon
          sx={{ fontSize: 30, mr: '12px', mt: '2px', color: `#666666`, cursor: 'pointer' }}/>
        </a>
        </Link>
      </div>
    </Wrapper>
  );
};

export default TopBar;
