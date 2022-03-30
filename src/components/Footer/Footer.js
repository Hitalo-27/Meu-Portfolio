import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Muito Obrigado pela sua Atenção !
        </p>
        <p className='footer-subscription-text'>
          Espero que tenha aprendido um pouco sobre a minha pessoa
        </p>
        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>Volte Sempre !</Button>
          </form>
        </div>
      </section>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HCS_
              <i class="fab fa-galactic-republic" />
            </Link>
          </div>
          <small class='website-rights'>Hitalo Chaves © 2022</small>
          <div class='social-icons'>
            <a
              href='https://www.instagram.com/hitalo_chaves/'
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>

            <a
              href='https://twitter.com/hitalo_chaves'
              class='social-icon-link twitter'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>


            <a
              href='https://www.linkedin.com/in/hitalo-chaves-b473b5208/'
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>

            <a
              href='https://github.com/Hitalo-27'
              class='social-icon-link twitter'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </a>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
