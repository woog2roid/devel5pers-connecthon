export default interface IBadge {
  created_at?: string | undefined;
  profile_id: string;
  badge_id: number;
  count: number;
  is_representative: boolean;
  badges: {
    id: number;
    name?: string | undefined;
    iconUrl?: string | undefined;
  };
}
