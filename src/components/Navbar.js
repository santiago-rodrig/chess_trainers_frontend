import React from 'react';
import styles from './Navbar.module.css';
import sidebarStyles from './Sidebar.module.css';

const Navbar = () => {
  const handleClick = () => {
    const sidebar = window
      .document.getElementsByClassName(sidebarStyles.sidebar)[0];
    const dimmer = window
      .document.getElementsByClassName(sidebarStyles.dimmer)[0];
    dimmer.classList.remove(sidebarStyles.dimmerHidden);
    dimmer.classList.add(sidebarStyles.dimmerActive);
    sidebar.classList.remove(sidebarStyles.sidebarHidden);
    sidebar.classList.add(sidebarStyles.sidebarActive);
  };

  return (
    <nav className={styles.navBar}>
      <button
        type="button"
        className={styles.sidebarToggler}
        onClick={handleClick}
      >
        <i className="fas fa-bars" />
      </button>
    </nav>
  );
};

export default Navbar;
