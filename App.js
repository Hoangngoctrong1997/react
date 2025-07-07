import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [a, setA] = useState(false);
  let [newName, setNewName] = useState("");
  let [newPrice, setNewPrice] = useState(0);
  let [newQuantity, setNewQuantity] = useState(0);
  let [product, setProduct] = useState([
    { name: "IP1", price: 1000, quantity: 5000 },
    { name: "IP2", price: 2000, quantity: 6000 },
    { name: "IP3", price: 3000, quantity: 7000 },
  ]);

  let [filteredProduct, setFilteredProduct] = useState(product);
  let [findName, setFindName] = useState("");

  let sortDescending = (arr) => {
    return arr.sort((a, b) => b.price - a.price);
  };

  useEffect(() => {
    if (findName.trim() === "") {
      setFilteredProduct(product);
    } else {
      let found = product.find(item => item.name.toLowerCase() === findName.toLowerCase());
      if (found) {
        setFilteredProduct([found]);
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

  let sortedProduct = sortDescending([...filteredProduct]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
            <button onClick={handleAddProduct}>Xác nhận</button>
          </div>
        ):""}

        <div>
          {sortedProduct.length > 0 ? (
            sortedProduct.map((item, index) => (
              <h4 key={index}>
                {item.name} , {item.price} , {item.quantity}
              </h4>
            ))
          ) : (
            <p>Không tìm thấy sản phẩm</p>
          )}
        </div>

        <button onClick={() => setA(!a)}>{a ? "Hủy" : "Thêm sản phẩm"}</button>
      </header>
    </div>
  );
}

export default App;
