import './App.css';
import { useState } from 'react';

function App() {
  let [student, setstudent] = useState([
    {
      studentname: "Nguyễn Văn A",
      age: 16,
      class: "11A1",
      score: 8.5
    },
    {
      studentname: "Trần Thị B",
      age: 17,
      class: "B",
      score: 9.0
    },
    {
      studentname: "Lê Văn C",
      age: 15,
      class: "C",
      score: 7.8
    },
    {
      studentname: "Phạm Thị D",
      age: 16,
      class: "A",
      score: 8.2
    }
  ]);
  let [studentNameEdit,setStudentNameEdit] = useState("");
  let [ageEdit,setAgeEdit] = useState("");
  let [classEdit,setClassEdit] = useState("");
  let [scoreEdit,setScoreEdit] = useState("");
  let [classList,setClassList] = useState(["A","B","C"]);
  let [a,setA] = useState(false);
  let [b,setB] = useState(false);
  let [addname,setAddname] = useState("");
  let [addage,setAddage] = useState("");
  let [addclass,setAddclass] = useState("A");
  let [addscore,setAddscore] = useState("");
  let [nameSearch , setNameSearch] = useState("");
  let [curentIndex , setCurentIndex] = useState("");
  let handleAddStudent = ()=>{
    let curentSudent = {
      studentname : addname,
      age : Number(addage),
      class : addclass,
      score : Number(addscore),
    }
    if(addname!=""){
   setstudent([...student,curentSudent])
   setA(!a);
   setAddname("");
   setAddage("");
   setAddscore("");
   setAddclass("A");
    }
    
  }
  let editStudent = (item,index)=>{
    setCurentIndex(index);
    setB(true);
    setStudentNameEdit(item.studentname);
    setAgeEdit(item.age);
    setClassEdit(item.class);
    setScoreEdit(item.score)
  }
  let handleEditStudent =()=>{
    let y = [...student];
    y[curentIndex]= {
      studentname:studentNameEdit,
      age: ageEdit,
      class:classEdit,
      score:scoreEdit};
      setstudent(...y);
      setB(!b)
  }
  let deleteStudent =(index)=>{
    let newList = student.filter((_, i) => i !== index);
    setstudent(newList);

  }
  return (
    <div className="App">
      <h1>Danh sách lớp</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>STT</th>
            <th>Lớp</th>
          </tr>
        </thead>
        <tbody>
          {classList.map((ls , index)=>(
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ls}</td>
            </tr>
        ))}
        </tbody>
      </table>
      <h1>Danh sách học sinh</h1>
      <div>
        <input
          type="text"
          placeholder="Tìm học sinh"
          onChange={(e) => setNameSearch(e.target.value)}
        />
      </div>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Lớp</th>
            <th>Điểm</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {student.filter((item=>item.studentname.toLowerCase().includes(nameSearch.toLowerCase()))).map((hs, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{hs.studentname}</td>
              <td>{hs.age}</td>
              <td>{hs.class}</td>
              <td>{hs.score}</td>
              <td><button onClick={() => editStudent(hs,index)}>Sửa</button><button onClick={() => deleteStudent(index)}>Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
        {b ?(
          <div>
            <input type="text" value={studentNameEdit} onChange={(e) =>setStudentNameEdit(e.target.value)} />
            <input type="number" value={ageEdit} onChange={(e) => setAgeEdit(e.target.value)} />
            <input type="number"value={scoreEdit} onChange={(e) => setScoreEdit(e.target.value)} />
            <select onChange={(e)=>{setClassEdit(e.target.value)}}>
                {
                    classList.map((y, index) => (
                        <option value={y} key={index}>
                            {y}
                        </option>
                    ))
                }
            </select>
            <button onClick={handleEditStudent}>Xong</button>
          </div>
        ):""}
      {a ?(
          <div>
            <input type="text" placeholder='Tên' value={addname} onChange={(e) => setAddname(e.target.value)} />
            <input type="number" placeholder='điểm' value={addscore} onChange={(e) => setAddscore(e.target.value)} />
            <input type="number" placeholder='tuổi' value={addage} onChange={(e) => setAddage(e.target.value)} />
            <select onChange={(e)=>{setAddclass(e.target.value)}}>
                {
                    classList.map((y, index) => (
                        <option value={y} key={index}>
                            {y}
                        </option>
                    ))
                }
            </select>
            <button onClick={handleAddStudent}>Xong</button>
          </div>
        ):""}
      <button onClick={() => setA(!a)}>{a ? "Hủy" : "Thêm học sinh"}</button>
    </div>
  );
}

export default App;
