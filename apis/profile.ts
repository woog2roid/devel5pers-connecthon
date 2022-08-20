import { definitions } from "../types/supabase"
import { supabase } from "../utils/supabase"

export const setRepresentativeBadge = async (userId: string, badgeId: number) => {
  await supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .update({
      is_representative: true,
    })
    .match({
      profile_id: userId,
      badge_id: badgeId,
    });
}

export const unsetRepresentativeBadge = async (userId: string, badgeId: number) => {
  await supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .update({
      is_representative: false,
    })
    .match({
      profile_id: userId,
      badge_id: badgeId,
    });
}
