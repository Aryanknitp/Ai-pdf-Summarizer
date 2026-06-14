export function buildAvatarUrl(
  avatar
) {
  if (!avatar) {
    return "/default-avatar.png";
  }

  return avatar;
}