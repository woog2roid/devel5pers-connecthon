import Image from 'next/image';
import { CustomMenuItem, CustomMenu } from './style';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import sessionState from '../../../store/session';
import userState from '../../../store/user';
import { signOutGoogle } from '../../../apis/auth';
import { Divider, List } from '@mui/material';

const UserMenu = () => {
  const router = useRouter();

  //recoil
  const user = useRecoilValue(userState);

  //onClick 구현
  const onClickLogout = () => {
    signOutGoogle();
    handleClose();
  };
  const onClickMypage = () => {
    router.push('./mypage');
    handleClose();
  };

  //User Menu 구현
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Image
        src={
          user?.user_metadata.avatar_url
            ? user?.user_metadata.avatar_url
            : '/images/user-default.png'
        }
        alt="Profile Image"
        style={{
          borderRadius: '50%',
          display: 'inline-block',
        }}
        width={30}
        height={30}
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      />
      <CustomMenu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ width: 180, height: 103 }}
      >
        <List sx={{ padding: 0, margin: 0, width: 180 }}>
          <CustomMenuItem onClick={onClickMypage}>마이페이지</CustomMenuItem>
          <Divider />
          <CustomMenuItem onClick={onClickLogout}>로그아웃</CustomMenuItem>
        </List>
      </CustomMenu>
    </>
  );
};

export default UserMenu;
