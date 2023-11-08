import React, { useRef,useEffect, useState } from 'react';

import Menu from '../Navmenu/menu';
import './Home.css'

const Home = () => {


<Menu></Menu>
//1.............
  const Myref = useRef()
  const change=()=>{
    Myref.current.innerText="Hello Aysha";}
    
//2......useRef.........
const myimg = useRef()
const onchange=()=>{
    myimg.current.src='https://placehold.co/600x400/000000/FFF';
    myimg.current.setAttribute("height","200px")
    myimg.current.setAttribute("wight","100px")
}
//3.................
const [data,setdata] = useState();

        useEffect( () => {
          (async ()=>{
            let response = await fetch('https://dummyjson.com/products/1')  ;
          let res = await response.json()
          setdata(res);
          })()
        }, []);
//4.................
const [number,setnumber]= useState(0);
  return (
      <div className='home-container'>
              <Menu></Menu>
              {/* 1............ */}
              <h1 ref={Myref}></h1>
              <button className="button" onClick={change}>Sunmit</button>
              <br />
              {/* 2............ */}
              <img ref={myimg} src='https://placehold.co/600x400?text=Hello\nWorld'></img><br />
              <button className='button' onClick={onchange}> Change</button>
              <br />
              {/* 3............. */}
              <p>{JSON.stringify(data)}</p>
              <br />

              {/* 4............. */}
              <h1>You have click {number} time</h1>
            <button className='button' onClick={()=>{setnumber(number+1)}}>click</button>
             
      </div>

    );
};


export default Home;