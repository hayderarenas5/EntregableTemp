const WeatherIcons = ({ weather }) => {
    //? Conversion de horario dt a hora exacta

    const timestamp = weather.dt;
    const date = new Date(timestamp * 1000); 
    const hour = date.getHours();
    const dateNumber=Number(hour)

const weatherIcons={
  "light rain": (dateNumber>5 && dateNumber<=17) ? "/icons/sun.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/night.png" :null,
  
  "few clouds": (dateNumber>5 && dateNumber<=17) ? "/icons/cloudsDay.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/cloudsNight.png" :null,
  
  "scattered clouds": "/icons/scatteredClouds.png",

  "broken clouds": "/icons/brokenClouds.png",
  
  "shower rain": (dateNumber>5 && dateNumber<=17) ? "/icons/showerDay.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/showerNight.png" :null,
  
  "rain": "/icons/rain.png",

  "thunderstorm": "/icons/thunderstorm.png",

  "snow": "/icons/snow.png",

  "mist": "/icons/mist.png"
}
  return (
    <img className="pb-[1.5rem]" src={weatherIcons[weather.weather[0].description]} alt="Icons" />
  )
}
export default WeatherIcons