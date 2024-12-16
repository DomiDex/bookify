import { getAllBooks } from '../lib/fake-data';
import BookList from '../ui/books/booklist';

export default function Page() {
  const books = getAllBooks();
  return (
    <div className='w-full'>
      <h1 className='text-3xl font-bold mb-8 text-center'>Our Books</h1>
      <BookList books={books} />
    </div>
  );
}
