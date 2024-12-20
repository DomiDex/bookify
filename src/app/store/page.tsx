import { getBooks } from '../actions/books';
import BookList from '../ui/books/booklist';

export default async function Page() {
  const books = await getBooks();

  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Our Books</h1>
      <BookList books={books} />
    </div>
  );
}
