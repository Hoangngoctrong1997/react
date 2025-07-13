import React, { useState } from 'react';

function HomestayForm({ addHomestay, owners }) {
  const [form, setForm] = useState({
    name: '', price: '', address: '', rooms: '', owner: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.owner) return;
    addHomestay({
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
      rooms: parseInt(form.rooms),
      rentCount: 0
    });
    setForm({ name: '', price: '', address: '', rooms: '', owner: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Thêm Homestay</h3>
      <input name="name" placeholder="Tên" value={form.name} onChange={handleChange} />
      <input name="price" type="number" placeholder="Giá" value={form.price} onChange={handleChange} />
      <input name="address" placeholder="Địa chỉ" value={form.address} onChange={handleChange} />
      <input name="rooms" type="number" placeholder="Số phòng" value={form.rooms} onChange={handleChange} />
      <select name="owner" value={form.owner} onChange={handleChange}>
        <option value="">Chọn chủ phòng</option>
        {owners.map((o, i) => <option key={i} value={o.name}>{o.name}</option>)}
      </select>
      <button type="submit">Thêm</button>
    </form>
  );
}

export default HomestayForm;
