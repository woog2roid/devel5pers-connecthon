import { definitions } from "../types/supabase"
import { supabase } from "../utils/supabase"
import handleSupabaseError from "./handleSupabaseError";

export const setRepresentativeBadge = async (userId: string, badgeId: number) => handleSupabaseError(
  async (userId: string, badgeId: number) => supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .update({
      is_representative: true,
    })
    .match({
      profile_id: userId,
      badge_id: badgeId,
    }),
  userId,
  badgeId,
)

export const unsetRepresentativeBadge = async (userId: string, badgeId: number) => handleSupabaseError( 
  async (userId: string, badgeId: number) => supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .update({
      is_representative: false,
    })
    .match({
      profile_id: userId,
      badge_id: badgeId,
    }),
  userId,
  badgeId,
)

export const getRepresentativeBadges = async (userId: string) => handleSupabaseError(
  async (userId: string) => supabase
    .from<definitions['profile_badge_mappings']>('profile_badge_mappings')
    .select()
    .match({
      profile_id: userId,
      is_representative: true,
    }),
  userId,
)
