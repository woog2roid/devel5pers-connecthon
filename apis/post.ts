import { supabase } from '../../utils/supabase';
import { definitions } from '../../types/supabase';

export const getPostById = async (id: number) => {
  return supabase.from<definitions['posts']>('posts').select().match({
    id,
  });
};

export const getPostsByCategory = async (category: string) => {
  return supabase.from<definitions['posts']>('posts').select().match({
    category,
  });
};

export const addPost = async (
  userId: string,
  category: string,
  description: string,
  image: string[],
) => {
  return supabase.from<definitions['posts']>('posts').insert([
    {
      author_id: userId,
      category,
      description,
      image,
    },
  ]);
};
