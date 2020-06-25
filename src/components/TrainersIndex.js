import React from 'react';
import TrainerItem from './TrainerItem';

const TrainersIndex = () => (
  <div className="trainersContainer">
    <form id="trainersSearch" onSubmit={e => e.preventDefault()}>
      <label htmlFor="trainersInput">
        <i className="fas fa-search" />
        <input type="text" id="trainersInput" />
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
