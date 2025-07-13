import React, { useState ,useEffect } from 'react';
import HomestayForm from './components/HomestayForm';
import OwnerForm from './components/OwnerForm';
import HomestayList from './components/HomestayList';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';
import OwnerList from './components/OwnerList';
import OwnerFormEdit from './components/OwnerFormEdit';
function App() {
  const [owners, setOwners] = useState([]);
  const [homestays, setHomestays] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('none');
  const [editOwner, setEditOwner] = useState();
  let addOwner = (owner) => setOwners([...owners, owner]);
  let addHomestay = (homestay) => setHomestays([...homestays, homestay]);
  let deleteOwner =(curentName)=>{
    let x = ([...owners])
    setOwners(x.filter(y => y.name !=curentName));
  }
  let editOwners =(editName)=>{
     let y = ([...owners]);
     setEditOwner(y.find(y=> y.name == editName));
  }
let handleChangeOwner = (ojb) => {
  let updatedOwners = owners.map(owner => {
    if (owner.name === editOwner.name) {
      return ojb;
    }
    return owner;
  });
  setOwners(updatedOwners);
  setEditOwner(null);
};

  let increaseRentCount = (id) => {
    setHomestays(homestays.map(item =>
      item.id === id ? { ...item, rentCount: item.rentCount + 1 } : item
    ));
  };

  const filtered = homestays.filter(x =>
    x.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    x.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    x.price.toString().includes(searchQuery) ||
    x.rooms.toString().includes(searchQuery)
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'asc') return a.price - b.price;
    if (sortOrder === 'desc') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <h1>Quản lý Homestay</h1>
      <OwnerForm addOwner={addOwner} />
      {editOwner?<OwnerFormEdit editOwner ={editOwner} handleChangeOwner={handleChangeOwner}/>:""}
      {owners.length > 0?<OwnerList list ={owners} deleteOwner={deleteOwner} editOwners={editOwners}/>:"chưa có chủ phòng"}
      <HomestayForm addHomestay={addHomestay} owners={owners} />
      <SearchBar setSearch={setSearchQuery} />
      <SortButtons setSort={setSortOrder} />
      {homestays.length > 0 ?<HomestayList homestays={sorted} onRent={increaseRentCount} />:"Chưa có phòng được thuê"}
    </div>
  );
}

export default App;
