import Input from "./Components/Input"
import React, {useState} from 'react'
import axios from "axios";
import Result from "./Components/Result";

const App = () => {

  const [input, setInput] = useState("");
  const [desc, setDesc] = useState("");
  const [temp, setTemp] = useState("")
  const [icon, setIcon] = useState("");

  const findWeather = async() =>{
    const apiKey = "e617d7f2455ab070c22740981a819adb";
    const unit = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit}`;
    const response = await axios.get(url);
    const temp = await response.data.main.temp;
    const weatherDesc = await response.data.weather[0].description;
    const icon = await response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    setTemp(temp);
    setDesc(weatherDesc);
    setIcon(imageURL);
    setInput("");
};

  console.log(temp, desc, icon);

  return (
    <div>
    {temp === "" ? (
      <Input setInput={setInput} input={input} findWeather={findWeather} />
    ) : (
      <Result temp={temp} desc={desc} image={icon} setTemp={setTemp}/>)}
      </div>
  )
}

export default App