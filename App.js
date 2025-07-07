import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
let [a , setA]= useState(false);
let [newName , setNewName] = useState("");
let [newPrice , setNewPrice] = useState(0);
let [newQuantity , setNewQuantity] = useState(0);
let [product , setProduct]= useState([  {name: "IP1", price :1000, quantity: 5000},
                                          {name: "IP2", price :2000, quantity: 6000},
                                          {name: "IP3", price :3000, quantity: 7000},]);

let [findName , setFindName] = useState("");
  let sortDescending =(ojb) => {
    return ojb.sort((a, b) => b.price - a.price);
}
function findObjectByName(array, findName) {
  return array.find(item => item.name === findName);
}

useEffect(() => {
  if (findName) {
    const found = findObjectByName(product, findName);
    if (found) {
      setProduct([found]);
    }
  }
}, [findName]);
  let productSort = sortDescending([...product])
  return (
    <>
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <input type="text" placeholder='tìm sản phẩm'onChange={(e)=>{setFindName(e.target.value)}}/>
          </div>
              {a ? (
                  <div>
                    <input type="text" placeholder='tên'onChange={(e)=>{setNewName(e.target.value)}}/>
                    <input type="text" placeholder='giá'onChange={(e)=>{setNewPrice(e.target.value)}}/>
                    <input type="text" placeholder='số lượng'onChange={(e)=>{setNewQuantity(e.target.value)}}/>
                    <button onClick={()=>{setProduct([...product, {name:newName ,price:newPrice,quantity:newQuantity}])}}>Xác nhận</button>
                  </div>
              ) : (
                <p></p>
              )}
        </div>
        <p>
        {productSort.map(item=><h4>{item.name} , {item.price} , {item.quantity}</h4>)}
        </p>
      <button onClick={()=>{setA(!a)}}>{a?("hủy"):("Thêm sản phẩm")}</button>
      </header>
    </div>
    </>
  );
}

export default App;
