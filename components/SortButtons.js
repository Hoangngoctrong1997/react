import React from 'react';

function SortButtons({ setSort }) {
  return (
    <div>
      <button onClick={() => setSort('asc')}>Giá tăng dần</button>
      <button onClick={() => setSort('desc')}>Giá giảm dần</button>
    </div>
  );
}

export default SortButtons;
