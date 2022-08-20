import { atom } from 'recoil';
export const badgeListState = atom<any>({
  key: 'badgeListState',
  default: [],
});

export const mainBadgeListState = atom<any>({
  key: 'mainBadgeListState',
  default: null,
});
