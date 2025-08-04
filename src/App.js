// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Addtodo} from "./MyComponents/Addtodo";
import {About} from "./MyComponents/About";
import React,{useState,useEffect} from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route
}from 'react-router-dom';


function App() {
  const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos):[];
};
 const [todos, setTodos] = useState(getInitialTodos);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);


  const onDelete=(todo)=>{
    console.log("i am on delete of todo",todo); 
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }



  const addtodo=(title,desc)=>{
    console.log("i am adding this todo ",title,desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 0;
    const myTodo={
      sno:sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }









  return (
    <>   

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
          <Addtodo addtodo={addtodo}/>
          <Todos todos={todos} onDelete={onDelete}/>
          </>
        }/>

        {/* </Route> */}
        <Route path="/About" element={<About/>} />
        {/* <About/> */}
        {/* </Route> */}
      </Routes>
    
      <Footer/>
    </Router>
    </>
  );
}


export default App;
// 18001219339 lenovo service number
// 2026468754 case id  