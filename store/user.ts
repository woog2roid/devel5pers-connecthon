import { atom } from 'recoil';
import { User } from '@supabase/supabase-js';

const userState = atom<User | null>({
  key: 'userState',
  default: null,
});

export default userState;
