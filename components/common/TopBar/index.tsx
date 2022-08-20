import { AddAPhotoOutlined } from '@mui/icons-material';
import { Wrapper } from './style';
import UserMenu from './UserMenu';

//depth가 깊지 않은, 즉, params가 없을 때의 TopBar
const TopBar = () => {
  const onClickPost = () => {
    alert('포스트를 눌렀습니다.');
  };

  return (
    <Wrapper>
      <div className="title">AIMECO</div>
      <div>
        <AddAPhotoOutlined
          onClick={onClickPost}
          sx={{ width: '30', height: '30', mr: '10px', color: 'f4444' }}
        />
        <UserMenu />
      </div>
    </Wrapper>
  );
};

export default TopBar;
