import { Session } from '@supabase/supabase-js';
import { atom } from 'recoil';

const sessionState = atom<Session | null>({
  key: 'sessionState',
  default: null,
});

export default sessionState;
