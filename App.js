import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [a, setA] = useState(false);
  let [b, setB] = useState(false);
  let [flag, setFlag] = useState(false);
  let [newName, setNewName] = useState("");
  let [newPrice, setNewPrice] = useState(0);
  let [newQuantity, setNewQuantity] = useState(0);
  let [editName, setEditName] = useState("");
  let [editPrice, setEditPrice] = useState(0);
  let [editQuantity, setEditQuantity] = useState(0);
  let [product, setProduct] = useState([
    { name: "IP1", price: 1000, quantity: 5000 },
    { name: "IP2", price: 2000, quantity: 6000 },
    { name: "IP3", price: 3000, quantity: 7000 },
  ]);

  let [filteredProduct, setFilteredProduct] = useState(product);
  let [findName, setFindName] = useState("");
  let [indexEdit, setIndexEdit] = useState(0);
  let sortDescending = (arr,flag) => {
    if(flag){
      return arr.sort((a, b) => b.price - a.price);
    }else{
      return arr.sort((a, b) => a.price - b.price);
    }
  };
  let handleSort = ()=>{
    setFlag(!flag);
  }
  useEffect(() => {
    if (findName.trim() === "") {
      setFilteredProduct(product);
    } else {
      let found = product.filter(item => item.name.toLowerCase().includes(findName.toLowerCase()));
      if (found) {
        setFilteredProduct(found);
      } else {
        setFilteredProduct([]);
      }
    }
  }, [findName, product]);

  let handleAddProduct = () => {
    let newItem = { name: newName, price: Number(newPrice), quantity: Number(newQuantity) };
    let updated = [...product, newItem];
    setProduct(updated);
    setFilteredProduct(updated);
    setA(false);
  };
let deleteProduct = (itemToDelete) => {
  const indexInProduct = product.findIndex(
    p =>
      p.name === itemToDelete.name &&
      p.price === itemToDelete.price &&
      p.quantity === itemToDelete.quantity
  );

  if (indexInProduct !== -1) {
    const newProduct = [...product];
    newProduct.splice(indexInProduct, 1);
    setProduct(newProduct);
    setFilteredProduct(newProduct);
  }
};
let editProduct = (item, indexInFiltered) => {
  const indexInFullProduct = product.findIndex(p => p.name === item.name && p.price === item.price && p.quantity === item.quantity);
  setIndexEdit(indexInFullProduct);
  setEditName(item.name);
  setEditPrice(item.price);
  setEditQuantity(item.quantity);
  setB(true);
};
  let handleEditProduct =()=>{
      let updated =[...product];
        updated[indexEdit] = {
        name: editName,
        price: editPrice,
        quantity: editQuantity
  };
       setProduct(updated);
       setFilteredProduct(updated);
       setB(false);
      
  }
  let sortedProduct = sortDescending([...filteredProduct],flag);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text"
            placeholder="Tìm sản phẩm"
            onChange={(e) => setFindName(e.target.value)}
          />
        </div>

        {a ?(
          <div>
            <input type="text" placeholder="Tên" onChange={(e) => setNewName(e.target.value)} />
            <input type="number" placeholder="Giá" onChange={(e) => setNewPrice(e.target.value)} />
            <input type="number" placeholder="Số lượng" onChange={(e) => setNewQuantity(e.target.value)} />
            <button onClick={handleAddProduct}>Thêm</button>
          </div>
        ):""}
          {b ?(
          <div>
            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
            <input type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
            <input type="number" value={editQuantity} onChange={(e) => setEditQuantity(e.target.value)} />
            <button onClick={handleEditProduct}>Xong</button>
          </div>
        ):""}

        <div>
          <div>Danh sách sản phẩm</div>
              <table border="1" cellpadding="10" cellspacing="0">
              <thead>
                <tr>
                  <th>Tên</th>
                  <th><span>Giá</span>
                  <button onClick={handleSort} className="sortButton">{flag ? "↑" : "↓"}</button>
                  </th>
                  <th>Số lượng</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedProduct.length > 0 ? (sortedProduct.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td><button onClick={() => editProduct(item, index)}>Sửa</button><button onClick={() => deleteProduct(item)}>Xóa</button></td>
                  </tr>
                  ))) : (<tr>
                          <td colSpan="4">Không tìm thấy sản phẩm</td>
                         </tr>
                        )}
              </tbody>
            </table>
        </div>
        <button onClick={() => setA(!a)}>{a ? "Hủy" : "Thêm sản phẩm"}</button>
      </header>
    </div>
  );
}

export default App;
