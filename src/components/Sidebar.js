import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import './Sidebar.css';

const Sidebar = () => {
  const sidebarRef = useRef();
  const dimmerRef = useRef();

  const handleDimmerClick = () => {
    dimmerRef.current.classList.remove(styles.dimmerActive);
    dimmerRef.current.classList.add(styles.dimmerHidden);
    sidebarRef.current.classList.remove(styles.sidebarActive);
    sidebarRef.current.classList.add(styles.sidebarHidden);
  };

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="dimmer">
          <span style={{ visibility: 'hidden' }}>Dimmer</span>
          <input
            ref={dimmerRef}
            type="button"
            name="dimmer"
            tabIndex="0"
            onKeyDown={e => {
              if (e.keyCode === 27) handleDimmerClick();
            }}
            className={`${styles.dimmerHidden} ${styles.dimmer}`}
            onClick={handleDimmerClick}
          />
        </label>
      </form>
      <aside
        className={`${styles.sidebarHidden} ${styles.sidebar}`}
        ref={sidebarRef}
      >
        <h1 className={styles.logo}>
          chess trainers
        </h1>
        <nav className={styles.navBox}>
          <ul className={styles.navList}>
            <li className={`navItem ${useLocation().pathname === '/trainers' ? 'navItem-active' : ''}`}>
              <Link onClick={handleDimmerClick} to="/trainers">trainers</Link>
            </li>
            <li className={`navItem ${useLocation().pathname === '/appointments' ? 'navItem-active' : ''}`}>
              <Link onClick={handleDimmerClick} to="/appointments">
                appointments
              </Link>
            </li>
            <li className={`navItem ${useLocation().pathname === '/account' ? 'navItem-active' : ''}`}>
              <Link onClick={handleDimmerClick} to="/account">account</Link>
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
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li className={styles.socialMediaItem}>
              <a
                href="http://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-pinterest-p" />
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
