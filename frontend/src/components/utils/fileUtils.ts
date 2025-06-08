export function isImageFile(url: any): boolean {
  if (typeof url !== 'string') return false;

  const ext = url.split('.').pop()?.toLowerCase();
  return /jpeg|jpg|png|gif|webp/.test(ext || '');
}
