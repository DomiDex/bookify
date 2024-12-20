'use server';

import { createServerSupabaseClient } from '@/lib/supabase/server';
import { Database } from '@/lib/supabase/types';

export type BookWithRentStatus =
  Database['public']['Tables']['books']['Row'] & {
    isRented: boolean;
    renterIds?: string[];
  };

export async function getBooks(): Promise<BookWithRentStatus[]> {
  const supabase = createServerSupabaseClient();

  const { data: books, error } = await supabase.from('books').select(`
      *,
      rentals (
        id,
        user_id,
        status
      )
    `);

  if (error) {
    console.error('Error fetching books:', error);
    return [];
  }

  return books.map((book) => ({
    ...book,
    isRented:
      book.rentals?.some((rental) => rental.status === 'active') ?? false,
    renterIds: book.rentals
      ?.map((rental) => rental.user_id)
      .filter(Boolean) as string[],
  }));
}
