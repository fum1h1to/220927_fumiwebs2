import { useGlobalStateContext } from 'provider/GlobalStateProvider';
import { useState } from 'react';
import base_styles from 'common/css/base.module.scss';
import styles from './style.module.scss';

const Header = () => {
  const { windowScroll, windowDimensions } = useGlobalStateContext();
  const [ isNavOpen, setIsNavOpen ] = useState(false);

  const spAction = () => {
    const body = document.querySelector('body');
    if (body && windowDimensions.width <= 800){
      setIsNavOpen(!isNavOpen);
      body.classList.toggle(base_styles.noScroll);
    }
  }

  return (
    <header className={`${base_styles.paddingLR} ${windowScroll.sy > 500 ? styles.sticky : ''}`}>
      <div className={`${styles.header} ${base_styles['max-width']}`}>
        <h1 className={styles.header__title}><a href="#">Fum1<span>W3b</span></a></h1>
        <nav className={`${styles.navbar} ${isNavOpen ? styles.active : ''}`}>
          <ul>
            <li><a href="#home" onClick={spAction}>Home</a></li>
            <li><a href="#about" onClick={spAction}>About</a></li>
            <li><a href="#skill" onClick={spAction}>Skill</a></li>
            <li><a href="#product" onClick={spAction}>Product</a></li>
            <li><a href="#history" onClick={spAction}>History</a></li>
            <li><a href="#contact" onClick={spAction}>Contact</a></li>
          </ul>
        </nav>
        <div 
          className={`${styles.humber} ${isNavOpen ? styles.active : ''}`}
          onClick={spAction}
        >
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
          <div className={styles.humber__bar}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
