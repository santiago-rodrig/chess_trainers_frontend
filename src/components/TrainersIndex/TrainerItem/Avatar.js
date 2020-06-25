import React from 'react';
import styles from './Avatar.module.css';

const Avatar = () => (
  <>
    <div className={styles.avatarContainer}>
      <img src="https://www.gravatar.com/avatar/f4b9954393f4205445d3d4f636add64f?s=300" alt="trainer avatar" />
    </div>
    <h1 className={styles.trainerName}>
      Trainer Name
    </h1>
  </>
);

export default Avatar;
