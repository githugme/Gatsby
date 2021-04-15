import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/global.css';

export default function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>
            <p>copyright 2021 web warrior</p>
        </footer>
    </div>
  );
}
