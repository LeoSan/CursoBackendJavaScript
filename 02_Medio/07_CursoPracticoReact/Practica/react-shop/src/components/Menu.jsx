import React from 'react';

import '../styles/Login.scss'; 

const Menu = () => {
  return (
<div className="desktop-menu">
  <ul>
    <li>
      <a href="/check-list" className="title">My orders</a>
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