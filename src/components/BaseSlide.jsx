import React from 'react';
import bluebar from '@/assets/bluebar.svg';

export const BaseSlide = ({ children, title }) => {
  return (
    <>
      <main className=' m-5 min-h-[86vh] items-center justify-center border border-blue-300 bg-white shadow-md shadow-black/30 max-sm:mb-20 '>
        <header>{title}</header>
        <article>
          <section>{children}</section>
        </article>
        <aside></aside>
        <footer></footer>
      </main>
    </>
  );
};

export default BaseSlide;
