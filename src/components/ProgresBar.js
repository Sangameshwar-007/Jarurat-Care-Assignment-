import React from 'react';
import '../components/ProgresBar.css';

function ProgresBar({ num }) {
  return (
    <div className="progress-bar">
      <div className="filler" style={{ width: `${(num / 150) * 100}%` }} />
    </div>
  );
}

export default ProgresBar;
