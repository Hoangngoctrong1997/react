import React, { useState } from 'react';

function OwnerForm({ addOwner }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name) return;
    addOwner({ ...form });
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Thêm Chủ Phòng</h3>
      <input name="name" placeholder="Tên" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="SĐT" value={form.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <button type="submit">Thêm</button>
    </form>
  );
}

export default OwnerForm;
