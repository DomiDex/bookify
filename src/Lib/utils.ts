export function getImageUrl(path: string | null): string {
  if (!path) return '/placeholder-book.jpg';

  if (path.startsWith('http')) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${path}`;
}
