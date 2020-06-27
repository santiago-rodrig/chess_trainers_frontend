import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.css';
import './Sidebar.css';

const Sidebar = () => {
  const sidebarRef = useRef();

  const handleItemClick = e => {
    const items = window.document.getElementsByClassName('navItem');

    for (let i = 0; i < items.length; i += 1) {
      if (items[i].classList.contains('navItem-active')) {
        items[i].classList.remove('navItem-active');
        break;
      }
    }

    e.target.parentNode.classList.add('navItem-active');
  };

  const handleDimmerClick = e => {
    e.target.classList.remove(styles.dimmerActive);
    e.target.classList.add(styles.dimmerHidden);
    sidebarRef.current.classList.remove(styles.sidebarActive);
    sidebarRef.current.classList.add(styles.sidebarHidden);
  };

  return (
    <>
      <div
        className={`${styles.dimmerHidden} ${styles.dimmer}`}
        onClick={handleDimmerClick}
      />
      <aside
        className={`${styles.sidebarHidden} ${styles.sidebar}`}
        ref={sidebarRef}
      >
        <h1 className={styles.logo}>
          chess trainers
        </h1>
        <nav className={styles.navBox}>
          <ul className={styles.navList}>
            <li className="navItem navItem-active">
              <Link to="/" onClick={handleItemClick}>trainers</Link>
            </li>
            <li className="navItem">
              <Link to="/appointments" onClick={handleItemClick}>
                appointments
              </Link>
            </li>
            <li className="navItem">
              <Link to="/" onClick={handleItemClick}>account</Link>
            </li>
          </ul>
        </nav>
        <footer className={styles.sidebarFooter}>
          <ul className={styles.socialMediaList}>
            <li className={styles.socialMediaItem}>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li className={styles.socialMediaItem}>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className={styles.socialMediaItem}>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright &copy; Santiago Rodríguez. All rights reserved.
          </p>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;

