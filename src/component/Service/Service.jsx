import React, { useRef,useState,useEffect } from 'react';
import Menu from '../Navmenu/menu';
import './Service.css'
const Service = () => {
    //1......useRef
    const focusPoint = useRef(null); 
    const onClickHandler = () => { 
      focusPoint.current.value = 
        "The quick brown fox jumps over the lazy dog"; 
        focusPoint.current.focus();
    }
    //2.....useEffect
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setCount((count) => count + 1);
        }, 1000);
      }, []);
      //3..usestate
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
  
    const addTodo = () => {
      if (newTodo.trim() !== "") {
        setTodos([...todos, newTodo]);
        setNewTodo("");
      }
    };
    //4...useRef
    let fname,lname = useRef();

    let myclick=()=>{
       let fn = fname.value;
       let ln= lname.value;
        alert(fn+" "+ln);
    }

    
    return (
        <div className='Service-container'>
            <Menu></Menu>
            {/* 1.useRef.... */}
           
      <div> 
        <button className='button' onClick={onClickHandler}> 
         ACTION 
        </button> <br />
      </div> 
      <label> 
       Click on the action button to  
       focus and populate the text. 
      </label><br/> 
      <textarea ref={focusPoint} /> 
    {/* 2.useEffect */}

    <h1>I've rendered {count} times!</h1>

    {/*3. useState */}
          {/*1. useState */}
          
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New Todo"
      /> <br />
      <button className='button' onClick={addTodo}>Add Todo</button>
      <br />
      <br />
            {/* 4.useRef */}
            <div>
            <input ref={(a)=>fname=a} type="text" />
            <input ref={(a)=>lname=a} type="text" /> <br />
            <button className='button' onClick={myclick}>SUBMIT</button>
        </div>

        </div>
    );
};

export default Service;