// import logo from './logo.svg';
import "./App.css";
// import { Button } from './utils/Button';
// import { menus } from './data/navMenus';
// import { obj1 } from './data/navMenus';

import { useEffect, useState } from "react";
import { ContextHome } from "./components/useContext/ContextHome";
import { Login } from "./components/Login";
import { ThirdPartyData } from "./components/ThirdPartyData";
// import { AboutMe } from "./components/AboutMe";
// import { Grid } from "./components/Grid";


// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Component2 } from "./components/Component2";
// import { Hooks } from "./components/Hooks";

function App() {
   const [count, setCount] = useState();
   const [currencylist, setCurrencyList] = useState();
   const [currency, setCurrency] = useState('inr');

   const [thirdPartyData, setThirdPartyData] = useState();
  //  let count2 = 0;

  const getData = async () => {
    try{
      const response =   await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
      const json = await response.json();
      console.log("json=>", json)
      setCount(json);
      setCurrencyList(Object.entries(json?.inr));
      console.log("Object.entries(json)=>",Object.entries(json.inr))
    }catch(error){
      console.log("Error=>", error)
    }
            // .then(res => res.json())
            // .then(json => setCount(json));
    
  }
  const getThirdPartyData = async () =>{
    const result = await fetch('http://localhost:4000/getThirdPartyData');
    console.log("result=>", result);
    const resultJSON = await result.json();
    console.log("resultJSON=>", resultJSON.data);
    setThirdPartyData(resultJSON.data);
  }
  
  // getData();
  useEffect(  ()=>{
    // getData();
    // getThirdPartyData();
    // console.log("data=>", count?.inr?.usd,count,count?.inr && Object.entries(count?.inr))
  },[])
   
  //  const handleIncreament = () => {
  //   setCount((prev)=>prev+1);

  //  }

  //  const handleClick = () =>{
  //   console.log("This is count2=>", count2);
  //   count2++;
  //  }
  return (
    <>

    <Login/>
    <h1> Hello from UI</h1>
    <ThirdPartyData/>
    {/* {thirdPartyData[0].data.map((item, index)=>{
      return (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      )
    })} */}
      {/* <h1>API Calling using Fetch </h1>
      <h1>{count?.inr?.usd}</h1>
      <select>
        {currencylist?.map((item, index)=>{
          console.log("This is item=>", item)
          return (
            <option value={item[1]}>{item[0]}</option>
          )
        })}
        
      </select> */}
     {/* <ContextHome/> */}
      {/* <h2>{count} {count2}</h2>
      <button  onClick={handleIncreament}>Increment Count</button>
      <button  onClick={handleClick}>Button 2</button> */}
   {/* <Router> */}
      {/* <Hooks/> */}
      {/* <div>
        <h1>
          <Link to="/about-me">About Us</Link>
        </h1>
        <Link to="/component">Grid</Link>
      </div>
      <>
        <Routes>
          <Route exact path="/about-me" element={<AboutMe />}></Route>
          <Route exact path="/component" element={<Component2/>}></Route>
        </Routes>
      </> */}
     {/* </Router> */}
    </>
  );
}

export default App;
