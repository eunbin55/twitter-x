export const timeAgo = (createdAt: string) => {
  const now = new Date();
  const diffSeconds = (now.getTime() - new Date(createdAt).getTime()) / 1000;

  const diffMinutes = Math.floor(diffSeconds / 60); // 분
  const diffHours = Math.floor(diffSeconds / (60 * 60)); // 시간
  const diffDays = Math.floor(diffSeconds / (60 * 60 * 24)); // 일

  if (diffSeconds < 60) return "방금 전";
  if (diffMinutes < 60) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else {
    return `${diffDays}일 전`;
  }
};
