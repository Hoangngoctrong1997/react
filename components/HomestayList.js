import React from 'react';

function HomestayList({ homestays, onRent }) {
  return (
    <div>
      <h3>Danh sách Homestay</h3>
      {homestays.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <p><strong>Tên khách:{item.name}</strong></p>
          <p>Giá: {item.price}</p>
          <p>Địa chỉ: {item.address}</p>
          <p>Số phòng: {item.rooms}</p>
          <p>Chủ phòng: {item.owner}</p>
          <p>Lượt thuê: {item.rentCount}</p>
          <button onClick={() => onRent(item.id)}>Thuê</button>
        </div>
      ))}
    </div>
  );
}

export default HomestayList;
