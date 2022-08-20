import { atom } from 'recoil';
import { ProfileBadgeMappingWithBadge } from '../apis/profile';

export const badgeListState = atom<ProfileBadgeMappingWithBadge[]>({
  key: 'badgeListState',
  default: [],
});

export const mainBadgeListState = atom<ProfileBadgeMappingWithBadge[]>({
  key: 'mainBadgeListState',
  default: [],
});
