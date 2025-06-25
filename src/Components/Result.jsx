import React from 'react'
import Button from '@mui/material/Button';
import './Result.css'


const Result = ({temp, desc, image, setTemp}) => {
  return (
    <div className="result">
        <div className="result-box">
            <h2>Temp: {temp}°C</h2>
            <p>{desc}</p>
            <img src={image} alt="icon" />
            <br/>
            <Button variant='contained' color='secondary' onClick={()=>{setTemp("")}}>Back</Button>
        </div>
    </div>
  )
}

export default Result