import './App.scss';

function App() {
  return (
    <div className="App">
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__nav">
            <div className="home--btn">
              <img src="/home.svg" alt="home" />
            </div>
          </div>
          <div className="header__search">
            <div className="header__search--input">
              <input type="text" />
              <div className="header__search--btn"> <img src="/search-svgrepo-com.svg" alt="search" /></div>
            </div>
            <div className='searchpopup__container'>
              <div className="searchpopup__item">
                <div className="searchpopup__item--logo">
                  <img src="https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp" alt="" />
                </div>
                <div className="searchpopup__rightside">
                  <div className="searchpopup__item--title">
                    <span>комп</span>
                  </div>
                  <div className="searchpopup__item--price">
                    <span>1023</span>
                  </div>
                  <div className="searchpopup__item--btn">
                    <span>Перейти</span>
                    <img src="./shopping-cart.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="main__catalog">
        <div className="main__sidebar">
          <nav>
            <li>
              Планшеты
            </li>
            <li>
              Планшеты
            </li>
            <li>
              Планшеты
            </li>
            <li>
              Планшеты
            </li>
            <li>
              Планшеты
            </li>
          </nav>
        </div>
        <div className="catalog__content">
          <div className="card">
            <div className="card__top">

              <div className="card__top--logo">
                <img src="https://c.dns-shop.ru/thumb/st1/fit/500/500/61f7965fa49ebbcd1fc5ccd2d2073680/93ba7a81a786695bdf44bb60000b82231d2c42bdddbb48c877cb0b559af6f608.jpg.webp" alt="itemLogo" />
              </div>
            </div>
            <div className="card__bottom">
              <div className="card__bottom--leftSide">
                <div className="card__bottom--name">
                  комп
                </div>
                <div className="card__bottom--price">1023 ₽</div>
              </div>
              <div className="card__bottom--rightSide">
                <div className="card__bottom--btn"><img src="/shopping-cart.svg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
