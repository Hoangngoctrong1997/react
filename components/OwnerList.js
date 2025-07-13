import React,{ useState } from 'react';

function OwnerList({list , deleteOwner, editOwners}) {
  let [isId, setIsId] = useState();
  let ToggleDetail= (index) =>{
  if (isId === index) {
    setIsId("");
  } else {
    setIsId(index);
  }
  }
  return (
    <div>
      <h3>Danh sách chủ phòng</h3>
        {list.map((item, index) => (
          <>
          <p><strong>Tên:{item.name}</strong></p><button onClick={()=>ToggleDetail(index)}>Chi tiết</button>
                                                 <button onClick={()=>deleteOwner(item.name)}>Xóa</button>
                                                 <button onClick={()=>editOwners(item.name)}>Sửa</button>
          {isId === index ?(
           <div>
            <p>Phone: {item.phone}</p>
            <p>Email: {item.email}</p>
          </div>):""}
          </>
      ))}
    </div>
  );
}

export default OwnerList;
