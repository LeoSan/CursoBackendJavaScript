import React, {useState, useEffect} from 'react';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

import icoMenu from '../icons/icon_menu.svg';
import icoCarShop from '../icons/icon_shopping_cart.svg';
import Logo from '../logos/logo_yard_sale.svg';

//Componentes 
import Menu from '../components/Menu';


const Header = () => {

const [toggle, setTgoggle] = useState(false);

const handleToggle = ()=>{
  
  setTgoggle(!toggle);

}

  return (
    <>
      <nav className={styles.nav}>
      <Image src={icoMenu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Image src={Logo} alt="logo" className={styles.logo}  />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        </div>
        <div className={styles['navbar-right']}>
        
        <ul>
          <li className={styles['navbar-email']}  onClick={handleToggle} > usuario@ejemplo.com </li>
          <li className={styles['navbar-email']}><a href="/create">Create Account</a> | <a href="/login">Login</a></li>
        </ul>
        </div>
      </nav>

      {
        
        toggle && <Menu/>
      
      }
    </>
)
}

export default Header;