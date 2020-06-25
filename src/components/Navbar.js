import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles.navBar}>
    <button type="button" className={styles.sidebarToggler}>
      <i className="fas fa-bars" />
    </button>
  </nav>
);

export default Navbar;
