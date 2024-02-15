import React, {useState, useEffect} from 'react'

export const ThirdPartyData = () => {
    const [thirdPartyData, setThirdPartyData] = useState();

    const getThirdPartyData = async () =>{
        const result = await fetch('http://localhost:4000/getThirdPartyData');
        console.log("result=>", result);
        const resultJSON = await result.json();
        console.log("resultJSON=>", resultJSON.data);
        setThirdPartyData(resultJSON.data);
      }

    useEffect(()=>{
        getThirdPartyData();
    }, [])
  return (
    <div>
        {thirdPartyData && thirdPartyData[0]?.data?.map((item, index)=>{
      return (
        <div key={index}>
          <p>{item.title}</p>
        </div>
      )
    })}
    </div>
  )
}
