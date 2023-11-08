import React, { useRef,useState,useEffect} from 'react';
import Menu from '../Navmenu/menu';
import './About.css'

const About = () => {
  //1.....useRef..........
    const Myref = useRef()
    const change=()=>{
      Myref.current.innerText="Hello Aysha";
    }
    //2.useState work
    const [count, setCount] = useState(0);
    //3.....useRef..........
const myimg = useRef()
const onchange=()=>{
    myimg.current.src='https://placehold.co/600x400/000000/FFF';
    myimg.current.setAttribute("height","200px")
    myimg.current.setAttribute("wight","100px")
}
 //4..........useEffect.
 const [data,setdata]=useState([]);

 useEffect(()=>{
     fetch('https://dummyjson.com/products/1')
     .then(res=>res.json())
     .then(json => setdata(json))
 },[])
    return (
        <div className='About-container'>
            <Menu></Menu>
            <h1 ref={Myref}></h1>
              <button className='button' onClick={change}>Sunmit</button><br />
              {/* 2...useState */}
              <p>Count: {count}</p>
              <br />
              <button className='button' onClick={() => setCount(count + 1)}>Increment</button><br />
              {/* 3.....useRef....... */}
              <img ref={myimg} src='https://placehold.co/600x400?text=Hello\nWorld'></img><br />
              <button className='button' onClick={onchange}> Change</button><br />
              <br />
               {/* 4.useeffect */}
        
        <div> 
              <p>{JSON.stringify(data)}</p>  
        </div>
        </div>
    );
};

export default About;