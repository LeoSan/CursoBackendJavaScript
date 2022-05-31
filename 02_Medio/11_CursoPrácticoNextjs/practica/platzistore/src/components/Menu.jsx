import React from 'react';
import style from '../../styles/Login.module.css'; 

const Menu = () => {
  return (
<div className={style['desktop-menu']}>
  <ul>
    <li>
      <a href="/check-list" className={style.title}>My orders</a>
    </li>
    <li>
      <a href="/">My account</a>
    </li>
    <li>
      <a href="/">Sign out</a>
    </li>
  </ul>
</div>

  )
}

export default Menu;