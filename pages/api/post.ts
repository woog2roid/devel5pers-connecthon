import { supabase } from '../../utils/supabase';
import { definitions } from '../../types/supabase';

export const getPostById = async (id: number) => {
  return supabase
    .from<definitions['posts']>('posts')
    .select()
    .match({
      id,
    });
};

// 모든 포스트를 받아옴
/*
    후에 follow/following 기능이 생기면서 수정될 예정
*/
export const getPosts = async () => {
  return supabase
    .from<definitions['posts']>('posts')
    .select()
    .order('created_at');
};

export const addPost = async (
  userId: string,
  certificate: string,
  description: string,
  image: string,
) => {
  return supabase.from<definitions['posts']>('posts').insert([
    {
      author_id: userId,
      certificate,
      description,
      image,
    },
  ]);
};
