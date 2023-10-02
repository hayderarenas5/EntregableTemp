import WeatherContainer from "./components/WeatherContainer"
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
    const [weather, setWeather] = useState(null)
    const succes=(pos)=>{

      const lat=pos.coords.latitude
      const lon=pos.coords.longitude
      const API_KEY= "e47d3b95287e31e169e37eb0b276febb"
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(({data}) => {
        /* .then({ data })=>console.log(data) */
          setWeather(data);
        }).catch((err) => {
          console.log(err);
        })
  }
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(succes)
  },[])
  return (
    <main className='font-[Lato] flex justify-center items-center min-h-screen text-white px-2 bg-[url(/background4.jpg)] bg-no-repeat bg-cover'>
       
      {
        weather? <WeatherContainer weather={weather}/>: <div><i className="fa-solid fa-circle-notch fa-spin"></i><span>Loading...</span></div>
      }   
    </main>
  );
}

export default App
