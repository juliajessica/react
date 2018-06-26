import React from 'react';
import style from './Header.css';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyles = {
    fontWeight: 'bold',
    fontFamily: 'sanserif',
    fontSize: '28px'
  };

  return(
    <div style={headerStyles} className={style.greenText}>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>

    </div>

  );
}

export default Header;
