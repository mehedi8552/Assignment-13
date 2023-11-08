import React, { useRef,useState,useEffect } from 'react';
import Menu from '../Navmenu/menu';
import './Project.css'
const Service = () => {
        //1....useRef
        let myhead = useRef();
        const myclick =()=>{
         myhead.current.classList.remove('text-sucess');
         myhead.current.classList.add('text-danger')
        }
         //2...useRef
    let fname,lname = useRef();

    let myc=()=>{
       let fn = fname.value;
       let ln= lname.value;
        alert(fn+" "+ln);
    }
    //3....
    const[number,setnumber]= useState(0)

    //4..........useEffect.
    const [data,setdata]=useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res=>res.json())
        .then(json => setdata(json))
    },[])
    return (
        <div className='Project-container'>
            <Menu></Menu>
            {/*1...useRef  */}
            <div>
            <h1 className='text-success' ref={myhead}>Make me red color</h1>
            <button className='button' onClick={myclick}>Red</button>
        </div>
        <br />
        {/* 2.useRef */}
        <div>
            <input ref={(a)=>fname=a} type="text" />
            <input ref={(a)=>lname=a} type="text" /> <br />
            <button className='button' onClick={myc}>SUBMIT</button>
        </div>
        <br />
        {/*3.UseState */}
        <div>
        <p>You have clicked {number} time</p>
 <button className='button' onClick={()=>{
             setnumber(number+1)
                }}>use</button>

        </div>
        <br />
        {/* 4.useeffect */}
        
        <div> 
              <p>{JSON.stringify(data)}</p>  
        </div>
        </div>
    );
};

export default Service;