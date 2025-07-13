import React, { useEffect, useState } from 'react';

function OwnerFormEdit({ editOwner ,handleChangeOwner }) {
  let [nameEdit,setNameEdit] = useState("");
  let [phoneEdit,setPhoneEdit] = useState("");
  let [emailEdit,setEmailEdit] = useState("");
  useEffect(() => {
    if (editOwner) {
      setNameEdit(editOwner.name);
      setPhoneEdit(editOwner.phone);
      setEmailEdit(editOwner.email);
    }
  }, [editOwner]);
  let handleEdit = () => {
    let x ={
                      name:nameEdit,
                      phone:phoneEdit,
                      email:emailEdit
    };
    handleChangeOwner(x)
  };

  return (
    // <form onSubmit={handleSubmit}>
    <>
      <h3>Sửa Chủ Phòng</h3>
      <input name="name" placeholder="Tên" value={nameEdit} onChange={(e)=>setNameEdit(e.target.value)} />
      <input name="phone" placeholder="SĐT" value={phoneEdit} onChange={(e)=>setPhoneEdit(e.target.value)} />
      <input name="email" placeholder="Email" value={emailEdit} onChange={(e)=>setEmailEdit (e.target.value)} />
      <button onClick={handleEdit}>Sửa</button>
    </>

  );
}

export default OwnerFormEdit;
