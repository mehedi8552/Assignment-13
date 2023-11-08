import React, { useRef,useState,useEffect } from 'react';
import Menu from '../Navmenu/menu';
import './Blog.css'

const Service = () => {

    //1..usestate
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
  
    const addTodo = () => {
      if (newTodo.trim() !== "") {
        setTodos([...todos, newTodo]);
        setNewTodo("");
      }
    };
    //2.....useEffect
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []);
    //3...
    let ref = useRef(0);

    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }
    
    //4....useRef
    let myhead = useRef();
   const myclick =()=>{
    myhead.current.classList.remove('text-success');
    myhead.current.classList.add('text-danger')
   }

    return (
        <div className='Blog-container'>
            <Menu></Menu>
      {/*1. useState */}
      <h1>display input data usnig useState</h1>
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
      />
      <button className='button' onClick={addTodo}>Add Todo</button>
      {/* 2.useEffect */}
    <h1>I've rendered {count} times!</h1>
    {/* 3.useRef */}
    <h1>Click counter using useRef</h1>
    <button className='button' onClick={handleClick}>
      Click me!
    </button>
            {/*4...useRef  */}
            <div>
            <h1 className='text-success' ref={myhead}>Hello I am Md mehedi hasan Sahariar</h1>
            <button className='button' onClick={myclick}>SUBMIT</button>
        </div>

        </div>
    );
};

export default Service;