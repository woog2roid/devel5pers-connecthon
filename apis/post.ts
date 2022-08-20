import { supabase } from '../utils/supabase';
import { definitions } from '../types/supabase';
import handleSupabaseError from './handleSupabaseError';

export const getPostById = async (id: number) =>
  handleSupabaseError(
    async (id: number) =>
      supabase.from<definitions['posts']>('posts').select().match({
        id,
      }),
    id,
  );

export const getPostsByCategory = async (category: string) =>
  handleSupabaseError(
    async (category: string) =>
      supabase.from<definitions['posts']>('posts').select().match({
        category,
      }),
    category,
  );

export const addPost = async (
  userId: string,
  category: string,
  description: string,
  image: string[],
) =>
  handleSupabaseError(
    async (
      userId: string,
      category: string,
      description: string,
      image: string[],
    ) =>
      supabase.from<definitions['posts']>('posts').insert([
        {
          author_id: userId,
          category,
          description,
          image,
        },
      ]),
    userId,
    category,
    description,
    image,
  );
