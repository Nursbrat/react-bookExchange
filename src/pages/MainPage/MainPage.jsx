import '../MainPage/MainPage.scss';

import React from 'react';

import { images } from '../../constants';

const MainPage = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__content">

          <div className="main__hero" style={{
            backgroundImage: `url(${images.hero})`
          }}>
            <div className="main__hero__content">
              <h1>Меняй свои книги с “Название”</h1>
              <button>Начать поиск</button></div>

          </div>



          <div className="main__genres">
            <div className="main__genre" >
              <img src={images.romance} alt="romance" />
            </div>
            <div className="main__genre">
              <img src={images.triller} alt="triller" />
            </div>
            <div className="main__genre">
              <img src={images.fantasy} alt="fantasy" />
            </div>
            <div className="main__genre">
              <img src={images.scifi} alt="scifi" />
            </div>
            <div className="main__genre">
              <img src={images.horror} alt="horror" />
            </div>
            <div className="main__genre">
              <img src={images.poem} alt="poem" />
            </div>
            <div className="main__genre">
              <img src={images.drama} alt="drama" />
            </div>
            <div className="main__genre">
              <img src={images.finance} alt="finance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
