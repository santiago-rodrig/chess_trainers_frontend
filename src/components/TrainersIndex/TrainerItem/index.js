import React from 'react';
import styles from './index.module.css';
import Avatar from './Avatar';
import Details from './Details';

const TrainerItem = () => (
  <>
    <Avatar />
    <hr className={styles.divisoryLine} />
    <Details />
    <button className={styles.contactButton} type="button">make appointment</button>
  </>
);

export default TrainerItem;
