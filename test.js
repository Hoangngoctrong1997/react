import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function ListNumber() {
  let [arr , setArr]= useState([]);
  let [a , setA]= useState(0);
  let [sum , setSum]= useState(0);
  let [tbc , setTbc]= useState(0);
  let Sum = ()=>{
      let x = 0
    for(let i= 0 ; i< arr.length;i++){
      x += arr[i]
        setSum(x)
    }
  }
  let Tbc = ()=>{
        let y = 0
        for(let i= 0 ; i< arr.length;i++){
        y += arr[i]
        setTbc(y/(i+1))
    }
  }
  return (
    <div>
        <div>TBC: {tbc}</div>
        <div>Tổng: {sum}</div>
        <ul>
          {arr.map((item , index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      <input type="text" placeholder='Nhập thêm phần tử' onChange={(e)=>{setA(+e.target.value)}}/>
      <button onClick={() =>{ setArr([...arr,a])}}>Thêm</button>
      <button onClick={() => Sum()}>tính tổng</button>
      <button onClick={() => Tbc()}>tính tbc</button>
    </div>
  );
}
export default ListNumber;
