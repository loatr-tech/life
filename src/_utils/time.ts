export function timeSince(date: Date | string) {
  const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' 年前';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' 月前';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' 天前';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' 小时前';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' 分钟前';
  }
  return '刚刚';
}

