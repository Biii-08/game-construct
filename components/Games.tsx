import React from 'react';
import '../styles/games.css'

const Games = () => {
  const gameItems = [
    {
      imgUrl: '/assets/image/fortnite.png',
      title: 'Velvet Games',
      subtitle: '',
      price: '$13.99',
    },
    {
      imgUrl: '/assets/image/skillgame.png',
      title: 'Mobile Skill Games',
      subtitle: 'Golden City',
      price: '$13.99',
    },
    {
      imgUrl: '/assets/image/servergame1.png',
      title: 'Server Game system',
      subtitle: 'Galaxy World',
      price: '$10.99',
    },
    {
      imgUrl: '/assets/image/mobilegame.png',
      title: 'Mobile Games',
      subtitle: 'Orion Stars',
      price: '$45.00',
    },
    {
      imgUrl: '/assets/image/servergame.png',
      title: 'Server Game System',
      subtitle: 'Orion Stars',
      price: '$99.99',
    },
  ];

  return (
    <div id='games' className='bg-[#0B0620]'>
      <div className='w-full flex justify-center items-center'>
        <div className='heading gradient-bg w-[1706.667px] h-[73.333px] flex items-center justify-center gap-[10px]'>
          <h1 className='uppercase text-[32px] text-[#FFF] text-center'>
            Top Hitlers
          </h1>
        </div>
      </div>
      <div className='flex flex-row'>
        {gameItems.map((item, index) => (
          <div key={index}>
            <img src={item.imgUrl} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
