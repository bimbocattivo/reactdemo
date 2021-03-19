import logo from './logo.svg';
import './App.css';
import {Child,LoadingMeassage}  from './component'
import ChildFunc from './component/child/ChildFunc'
import iris from './iris.csv'
import dataMatrix from './dataMatrix.json'
import { useState,useEffect } from 'react';
import {readRemoteFile,jsonToCSV } from 'react-papaparse'
const { Parser } = require('json2csv');
const CheckConnection=()=>{
  const [online,setOnline]=useState();
  const [offline,setOffline]=useState()

  useEffect(()=>{
    setTimeout(()=>{
      if (navigator.onLine) {
        setOnline(true)
        console.log('online');
      } else {
        setOffline(false)
        console.log('offline');
      }
      console.log('offline');
      //setCount(count+1)
    },1500)
    //setTimeout(() => setCount({count:count+1}),1500)  
  },[online])

  return  online?<p style={{color:"green"}}>Online</p>:<p style={{color:"red"}}>Offline</p>
}
function App() {//dataMatrix

  const [data,setData]=useState();
  const [csvData,setCsvData]=useState()
  const [count,setCount]=useState(0)
  const {data1,data2} =ChildFunc()
  console.log('ChildFunc:',data1,data2)
  console.log('count:',count);

  //const fields = ['species','island','bill_length_mm','bill_depth_mm','flipper_length_mm','body_mass_g','sex','year'];
  //const opts = { fields };


  
// useEffect(()=>{
//   try {
//     const parser = new Parser();
//     const csv = parser.parse(dataMatrix);
//     setData(csv)
//     //console.log('CSV:',csv);
//   } catch (err) {
//     console.error(err);
//   }
// })

// var results = Papa.parse(csv, {
// 	comments: "#"
// });console.log('results:',results);
const getCsvFile=()=>{
  readRemoteFile(
    iris,
    {
      complete: (results) => {
        setCsvData({data:results})
        //console.log('Results:', results)
      }
    }
  )
  
 
}
 console.log('Results Iris:', csvData, 'data:','data')

//const results = jsonToCSV(dataMatrix)
//console.log('JsonToCSV:',results);

/*
readRemoteFile(data, {
  complete: (data) => {
    
     //ArrayData.push(data)
     if(data){
      //const results = jsonToCSV(data.data);
      
       setCsvData(data)
      // console.log('+++++ parsedData :',parsedData,'dimss:',dims);
     }
    
  }
})
*/



  const getDataFromChild=(d1,d2)=>{
    //'data:',data.map(item=>item),
    console.log('d.data1:',d1,'d.sata2:',d2)
  }
  return (
    <div className="App">
      <header className="App-header">
        
       <CheckConnection />
        <button onClick={getCsvFile}>Get csv file</button>
        {/* <Child  data={getDataFromChild}/>  <LoadingMeassage />*/}
        <Child data={getDataFromChild} />
      </header>
    </div>
  );
}

export default App;
