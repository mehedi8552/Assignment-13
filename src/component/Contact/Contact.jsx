import React, { useRef,useState,useEffect} from 'react';
import Menu from '../Navmenu/menu';
import './Contact.css'
const Service = () => {

        //1..usestate
        const [count, setCount] = useState(0);
      
        const increment = () => {
          setCount((prevCount) => prevCount + 5);
        }
        //2...useEffect
        const [object,setobject]=useState({

            fname:"",
            lname:"",
            city:"",
            gender:""
        }
        )
            const updatedata=(property,value)=>{
                setobject(
                    preobj=>(
                        {
                            ...preobj,
                            [property]:value
                        }
                    )
                )
    
            }
            const fsubmit=(e)=>{
                e.preventDefault();
                alert(JSON.stringify(object))
            }
            //3...........
            const [data,setdata]=useState([]);

            useEffect(()=>{
                fetch('https://dummyjson.com/products/1')
                .then(res=>res.json())
                .then(json => setdata(json))
            },[])
            //4...useref
            const [inputValue, setInputValue] = useState("");
            const previousInputValue = useRef("");
          
            useEffect(() => {
              previousInputValue.current = inputValue;
            }, [inputValue]);

    
    return (
        
        <div className='Contact-container'>
            <Menu></Menu>
            {/*1. useState */}
            <p>Count: {count}</p>
      <button className='button' onClick={increment}>Increment</button>
      {/* 2.useState pro */}
      <div className='container'> 
    <form onSubmit={fsubmit}>
        <br />
        <input onChange={(e)=>{updatedata("fname",e.target.value)}} value={object.fname}  type="text" placeholder='First Name'/><br />
        <input onChange={(e)=>{updatedata("lname",e.target.value)}}  value={object.lname}  type="text" placeholder='Last Name'/><br />
        <select onChange={(e)=>{updatedata("city",e.target.value)}} value={object.city}>
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Barisal">Barisal</option>
        </select>
        <br />
        <input onChange={()=>{updatedata("gender","male")}} checked={object.gender ==="male"}  type="radio" name='gender' /> Male 
        <input onChange={()=>{updatedata("gender","female")}} checked={object.gender ==="female"}  type="radio" name='gender' /> Female
        <br />
        <button className='button' type='Submit'>Submit</button>
    </form>
    
    
    </div>
        {/* 3.useeffect */}
   
        <div> 
              <p>{JSON.stringify(data)}</p>  
        </div>
        {/* 4...useref */}
        <div>
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
        </div>

    </div>

    );
};

export default Service;