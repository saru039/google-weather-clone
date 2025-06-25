import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Input = ({input,setInput,findWeather}) => {
    const functionCall = (event)=>{
        event.preventDefault();
        findWeather();
    }
  return (
    <div className="input-box">
        <div className="input-box-field">
            <h1>Google Weather App</h1>
            <p>Powered By</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="google" />
            <form action="" onSubmit={functionCall}>
                <TextField id="standard-basic" label="Enter the city name" variant="standard" onChange={(e)=>setInput(e.target.value)} />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    </div>
  )
}

export default Input