export default function AboutPage() {
  return (
    <section className='max-w-4xl mx-auto px-6 py-12'>
      <div className='space-y-8'>
        <header className='text-center space-y-4'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-lime-500 to-lime-300 bg-clip-text text-transparent'>
            About Bookify
          </h1>
          <p className='text-xl text-foreground/60'>
            Your Gateway to Literary Adventures
          </p>
        </header>

        <div className='grid md:grid-cols-2 gap-8 mt-12'>
          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold'>Our Mission</h2>
            <p className='text-lg text-foreground/80 leading-relaxed'>
              At Bookify, we believe in making literature accessible to
              everyone. Our platform offers a unique combination of buying and
              renting options, ensuring that readers can enjoy their favorite
              books in a way that suits their lifestyle and budget.
            </p>
          </div>

          <div className='space-y-6'>
            <h2 className='text-2xl font-semibold'>What We Offer</h2>
            <ul className='space-y-4 text-lg text-foreground/80'>
              <li className='flex items-center gap-2'>
                <span className='text-lime-500'>•</span>
                Extensive collection of books across genres
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-lime-500'>•</span>
                Flexible buying and renting options
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-lime-500'>•</span>
                Community-driven book discussions
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-lime-500'>•</span>
                Competitive pricing and regular deals
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 p-6 bg-lime-500/10 rounded-lg border border-lime-500/20'>
          <h2 className='text-2xl font-semibold mb-4'>Join Our Community</h2>
          <p className='text-lg text-foreground/80 leading-relaxed'>
            Become part of our growing community of book lovers. Share your
            thoughts, participate in discussions, and discover your next
            favorite read with fellow bibliophiles.
          </p>
        </div>
      </div>
    </section>
  );
}
