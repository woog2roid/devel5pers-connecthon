import { definitions } from '../types/supabase';
import { supabase } from '../utils/supabase';

// userId를 받아서 특정 유저의 모든 뱃지를 받아옴
export const getBadgesByUserId = async (userId: string) => {
  return supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .select()
    .match({
      profile_id: userId,
    })
    .order('created_at');
};

// userId와 badgeId를 받아서 특정 유저에게 뱃지를 부여
export const addBadgeToUser = async (userId: string, badgeId: number) => {
  return supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .insert([
      {
        profile_id: userId,
        badge_id: badgeId,
      },
    ]);
};

// 유저의 뱃지 보유 현황을 업데이트 할 수 있음
/*
  분리수거를 몇번 했는지의 뱃지는
  백엔드에서는 분리수거 뱃지를 몇개 가졌는지로 구현하였기 때문에,
  분리수거 인증글을 올릴 때 마다 이 api를 호출해서 뱃지 보유 현황을 늘려주어야 함.
*/
export const updateBadgeCount = async (
  userId: string,
  badgeId: number,
  count: number,
) => {
  return supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .update({
        count,
    })
    .match({
      profile_id: userId,
      badge_id: badgeId,
    });
};

// 유저가 특정 뱃지를 삭제할 수 있음
export const deleteBadge = async (userId: string, badgeId: number) => {
  return supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .delete()
    .match({ profile_id: userId, badge_id: badgeId });
};