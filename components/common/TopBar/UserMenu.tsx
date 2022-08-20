import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import userState from '../../../store/user';
import { signOutGoogle } from '../../../apis/auth';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { AccountBoxOutlined, AccountCircle, Logout } from '@mui/icons-material';
import React from 'react';

const UserMenu = () => {
  const router = useRouter();

  //recoil
  const user = useRecoilValue(userState);


  //onClick 구현
  const onClickLogout = () => {
    signOutGoogle();
    handleClose();
  };

  const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement)
  const openMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget)
  };
  const handleClose = () => {
    setAnchorElement(null)
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
        onClick={openMenu}
      />
      <Menu
        anchorEl={anchorElement}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link href="/mypage">
          <MenuItem>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            마이페이지
          </MenuItem>
        </Link>
        <MenuItem onClick={onClickLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          로그아웃
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
