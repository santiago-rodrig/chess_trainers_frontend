import React from 'react';
import TrainerItem from './TrainerItem';
import styles from './TrainersIndex.module.css';

const TrainersIndex = () => (
  <div className="trainersContainer">
    <form
      className={styles.trainersSearch}
      id="searchForm"
      onSubmit={e => e.preventDefault()}
    >
      <label htmlFor="trainersInput" className={styles.searchLabel}>
        <span>Search</span>
        <i className={`fas fa-search ${styles.searchIcon}`} aria-hidden="true" />
        <input
          type="text"
          name="trainersInput"
          className={styles.searchInput}
          onFocus={() => window.document.getElementById('searchForm').classList.add(styles.searchFormExpanded)}
          onBlur={() => window.document.getElementById('searchForm').classList.remove(styles.searchFormExpanded)}
          placeholder="Looking for a specific trainer?"
        />
      </label>
    </form>
    <ul id="sliderIndicators">
      <li className="circle circleActive" />
      <li className="circle" />
      <li className="circle" />
    </ul>
    <main>
      <TrainerItem />
    </main>
  </div>
);

export default TrainersIndex;
