import { AddAPhotoOutlined } from '@mui/icons-material';
import { Wrapper } from './style';
import UserMenu from './UserMenu';
import { FaSeedling } from 'react-icons/fa';
import { COLORS } from '../../../styles/palette';

//depth가 깊지 않은, 즉, params가 없을 때의 TopBar
const TopBar = () => {
  const onClickPost = () => {
    alert('포스트를 눌렀습니다.');
  };

  return (
    <Wrapper>
      <div className="title" style={{fontSize: "24px", color: `${COLORS.green}`}}>
        <FaSeedling style={{fontSize: 30, marginRight: "10px"}}/>
        A I M E C O
      </div>
      <div style={{marginRight: "3px", marginTop: "2px"}}>
        {/*<AddAPhotoOutlined
          onClick={onClickPost}
  sx={{ fontSize: 30, mr: '12px',mt: '2px', color: `${COLORS.lightGreen}` }}/>*/}
        <UserMenu />
      </div>
    </Wrapper>
  );
};

export default TopBar;
