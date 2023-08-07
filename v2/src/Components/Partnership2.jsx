import React from 'react';
import Tech from '../img/tech.png';

function Partnership2() {
  return (
    <div className="flex overflow-hidden">
      <div className="w-1/3">
        <img
          src={Tech}
          alt="Tech"
          className="w-full animate-slide"
          style={{ animationDuration: '5s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
        />
      </div>
      <div className="w-1/3">
        <img
          src={Tech}
          alt="Tech"
          className="w-full animate-slide"
          style={{ animationDuration: '5s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}
        />
      </div>
    </div>
  );
}

export default Partnership2;
