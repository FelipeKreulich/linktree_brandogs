import './App.css';

import Logo from './images/Logo.png';
import InstagramIcon from './images/InstagramIcon.png';
import PartnersIcon from './images/PartnersIcon.png';
import PrizeIcon from './images/PrizeIcon.png';
import TicketIcon from './images/TicketIcon.png';
import WhatsappIcon from './images/WhatsappIcon.png';

import 'animate.css';

function App() {
  return (
    <div className="App">
      <div className='card animate__animated animate__backInDown'>
        <div className='card_body'>
          <div className='profile text-center'>
            <img src={Logo} alt='Bran Dogs' className='avatar' />
            <div className='bg_content rd_12 p_8'>
              <h1 className='title-color'>BRAN DOG'S</h1>
              <p>Adestramento Personalizado</p>
            </div>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/bran_dogs_oficial/'>
              <img src={InstagramIcon} alt='Instagram' className='icons' />
              <span>Entre em nosso instagram para mais conteúdo!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://wa.me/5567999997890'>
              <img src={WhatsappIcon} alt='WhatsApp' className='icons' />
              <span>Entre em contato para orçamentos!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/p/CtJ-sa2rYQz/'>
              <img src={PartnersIcon} alt='Parceiros' />
              <span>Conheça nossos parceiros e fique ligado!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/bran_dogs_oficial/'>
              <img src={PrizeIcon} alt='Sorteio' className='icons' />
              <span>Concorra em nosso sorteio, fique atento!</span>
            </a>
          </div>
          <div className='mt-16'>
            <a className='btn_action bg_content' href='https://www.instagram.com/bran_dogs_oficial/'>
              <img src={TicketIcon} alt='Desconto' className='icons' />
              <span>Receba descontos e promoções exclusivas!</span>
            </a>
          </div>
          <div className='contact'>
            <span>Para mais informações entre em contato via <a className='text-color' href='https://wa.me/5567999997890'>WhatsApp.</a></span>
          </div>
          <div className='footer bg_content'>
            <p>Designed by ❤️ Networking Solution - 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;