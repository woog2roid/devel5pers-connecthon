import { supabase } from '../../utils/supabase';
import { definitions } from '../../types/supabase';

export const getPostById = async (id: number) => {
  const result = await supabase
    .from<definitions['posts']>('posts')
    .select()
    .match({
      id,
    });

  return result;
};

// 모든 포스트를 받아옴
/*
    후에 follow/following 기능이 생기면서 수정될 예정
*/
export const getPosts = async () => {
  const result = await supabase
    .from<definitions['posts']>('posts')
    .select()
    .order('created_at');

  return result;
};

export const addPost = async (
  userId: string,
  certificate: string,
  description: string,
  image: string,
) => {
  const result = await supabase.from<definitions['posts']>('posts').insert([
    {
      author_id: userId,
      certificate,
      description,
      image,
    },
  ]);

  return result;
};
