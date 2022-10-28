import React from 'react';
import bluebar from '@/assets/bluebar.svg';

export const Home = () => {
  return (
    <div className='w-full justify-center rounded-t bg-white px-5 shadow-md shadow-black/30 print:hidden'>
      <main className='px-4 md:px-0'>
        <div className='container mx-auto'>
          <section className=''>
            <div className='mx-auto flex flex-col flex-wrap items-center py-24 md:flex-row md:py-36'>
              <div className='flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-3/5'>
                <div className=''>
                  <h1 className='text-4xl font-semibold'>
                    Mesaje de Pruebas para la cosi
                  </h1>
                  <p>
                    Authentic cred hoodie hashtag selfies. Raclette banjo
                    cardigan cred. Kitsch XOXO lomo polaroid. Knausgaard put a
                    bird on it four dollar toast leggings typewriter
                    asymmetrical.
                  </p>
                  <p>HIIIIIIIIIIIIIIIIIIIIIIIIIIII</p>
                </div>{' '}
                <div className='mb-12 xl:mb-0'>
                  <form
                    name='signups'
                    className='flex items-center border-2 border-b border-blue-400 py-2'
                  >
                    <input
                      type='text'
                      name='email'
                      placeholder='your@email.com'
                      aria-label='Email address'
                      className='mb-36 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight text-gray-700 focus:outline-none'
                    />
                    <button
                      type='submit'
                      className='flex-shrink-0 rounded border-4 border-blue-500 bg-blue-500 py-1 px-2 text-sm text-white hover:border-blue-700 hover:bg-blue-700'
                    >
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>{' '}
              <div className='flex w-full flex-col xl:w-2/5'>
                <img
                  alt='Hero'
                  src='https://source.unsplash.com/random/720x400'
                  className='rounded shadow-xl'
                />
              </div>
            </div>
          </section>
        </div>
        <img src={bluebar} />
        <footer className='footer -mx-4 md:mx-0'>
          <div className='container mx-auto flex justify-center pb-6'>
            <a href='https://github.com/yetto-tools '></a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
