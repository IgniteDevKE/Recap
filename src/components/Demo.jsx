import React, {useState, useEffect} from 'react';

import {copy, linkIcon, loader, tick} from "../assets";
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url:"",
    summary:"",
  });

  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await getSummary({articleUrl:article.url});

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      // update state and local storage
      setArticle(newArticle);

      console.log(newArticle);
  }
}

  return (
    <section>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}
        >
          <img 
            src={linkIcon}
            alt='link-icon'
            className='absolute left-0 my-2 ml-3 w-5' 
          />

          <input
            type='url'
            placeholder='Paste the article link'
            value={article.url}
            onChange={(e) => setArticle({...article, url:e.target.value})}
            required
            className='url_input peer' />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
              <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
    </div>

      {/* Display Result */}
    </section>
  );
};


export default Demo;