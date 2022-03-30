import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../../App.css';
import { Button } from '../Button/Button';
import './Home.css';

function Home() {
  return (
    <div className='hero-container' id="home">
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <div className='infoHome'>
        <div className="myPhotoDiv">
          <img src="https://github.com/Hitalo-27.png" alt="Minha Foto" className="myPhoto" />
        </div>
        <div className="infoDiv">
          <h1 className='myName'> Hitalo Chaves</h1>
          <p className='textFrontEnd'> Front-End Developer</p>
          <p className='textHome'> SÃO PAULO CAPITAL</p>
          <p className='textHome'> EDUCAÇÃO: UNIP TATUAPÉ - CIÊNCIAS DA COMPUTAÇÃO</p>
          <div className='hero-btns'>

            <AnchorLink
              href="#sobre" offset={100}>
              <Button
                className='btns btnSobre'
                buttonSize='btn--large'
              >
                SOBRE MIM
              </Button>
            </AnchorLink>

            <AnchorLink
              href="#skills" offset={100}>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
            >
              SKILLS E IDIOMAS
            </Button>
            </AnchorLink>
          </div>
        </div>

      </div>
    </div >
  );
}

export default Home;
