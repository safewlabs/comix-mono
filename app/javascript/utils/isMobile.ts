export function isMobile(userAgent: string): boolean {
  const mobileRegex =
    /Mobile|Android|iPhone|iPod|iPad|iPad Pro|iPad Air|iPad Mini|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Silk|Kindle|PlayBook|BB10|MeeGo|AvantGo|PalmOS|Nokia/i;
  return mobileRegex.test(userAgent);
}
