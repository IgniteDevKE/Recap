import React, { useCallback } from 'react';

import {logo} from "../assets";

const Hero = () => {

  const handleClick = useCallback(() => {
    window.open("https://github.com/Ian-Chege/Summarizer-JSM", "_blank", "noopener");
  }, []);

  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
        <button 
          type='button'
          onClick={handleClick}
            className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Turn Your Articles Into <br className='max-md:hidden' />
        <span className='orange_gradient'> Nutshells</span>
      </h1>

      <h2 className='desc'>
        Refresh your memory with Recap, a collaborative article summarizer that condenses lengthy articles into crisp and concise summaries
      </h2>
    </header>
  );
};
export default Hero;