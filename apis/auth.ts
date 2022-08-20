import { supabase } from '../../utils/supabase';

export const signInGoogle = async () => {
  return supabase.auth.signIn({
    provider: 'google',
  });
};

export const signOutGoogle = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};

export const getUser = () => {
  const user = supabase.auth.user();
  return user;
};

export const getSession = () => {
  const session = supabase.auth.session();
  return session;
};
