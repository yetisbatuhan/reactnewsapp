import React from 'react';

const Main = (props) => {
  if (props.News.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className='grid xl:grid-cols-3 md:gap-2 mt-3 container mx-auto'>
      {props.News.map((article, index) =>
        article.urlToImage ? (
          <div
            className='col-span-1'
            key={index}
            onClick={() => console.log(article)}
          >
          <div>
            <img
              className='h-60 p-2 w-full'
              src={article.urlToImage}
              alt={`image: ${article.title}`}
            />
            <h2 className='text-[25px] font-mono font-bold my-auto mx-auto'>
              {article.title}
            </h2>
            <p>{article.description}</p>
          </div></div>
        ) : null
      )}
    </div>
  );
}

export default Main;
