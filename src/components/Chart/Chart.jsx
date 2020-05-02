import React, {useState, useEffect} from 'react'

//import {Line, Bar} from 'react-chartjs-2';

//import styles from './Chart.module.css'


const Chart = () =>{
    const [dailyData, setDailyData] = useState([]);     // initialize dailyData as empty object
    const [hasError, setErrors] = useState(false);  

        let url='https://covid19.mathdro.id/api/daily';
    
        async function fetchData() {
            const res = await fetch(url);
            res
              .json()
              .then(res => setDailyData(res))
              .catch(err => setErrors(err));
          }
        
          useEffect(() => {
              fetchData();
              
          },[]);
          console.log("In Chart");
        //  console.log(dailyData);
          
          const modifiedData = dailyData.map((dd)=> ({
                confirmed: dd.confirmed.total,
                deaths: dd.deaths.total,
                date: dd.reportDate
          }))
          
          console.log(modifiedData[0]);
        
          /* 
    const lineChart = (
        <Line
         data ={{
             lables: '',
             datasets: [{},{}] 
         }}
         />
         
    );
    */

    return (
        //<span>{JSON.stringify(dailyData)}</span>
        <h1>Chart</h1>
    )
}

export default Chart;