import React from 'react';
import style from './Header.css';

function Header(){
  let headerStyles = {
    fontWeight: 'bold',
    fontFamily: 'sanserif',
    fontSize: '28px'
  };

  return(
    <div style={headerStyles} className={style.greenText}>
      <h1>Help Queue</h1>

    </div>

  );
}

export default Header;
