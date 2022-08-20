import { atom } from 'recoil';
import IBadge from '../types/badge';
export const badgeListState = atom<IBadge[] | null>({
  key: 'badgeListState',
  default: null,
});

export const mainBadgeListState = atom<IBadge[] | null>({
  key: 'mainBadgeListState',
  default: null,
});
