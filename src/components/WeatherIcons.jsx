const WeatherIcons = ({ weather }) => {
    //? Conversion de horario dt a hora exacta

    const timestamp = weather.dt;
    const date = new Date(timestamp * 1000); 
    const hour = date.getHours();
    const dateNumber=Number(hour)

const weatherIcons={
  "light rain": (dateNumber>5 && dateNumber<=17) ? "/icons/sun.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/night.png" :null,

  'light intensity drizzle': "/icons/brokenClouds.png",

  'drizzle': "/icons/brokenClouds.png",

  'heavy intensity drizzle': "/icons/brokenClouds.png",

  'light intensity drizzle rain': "/icons/brokenClouds.png",

  'light intensity shower rain': "/icons/brokenClouds.png",

  'drizzle rain': "/icons/brokenClouds.png",

  'heavy intensity drizzle rain': "/icons/brokenClouds.png",

  'heavy intensity shower rain':"/icons/brokenClouds.png",

  'heavy intensity rain': "/icons/brokenClouds.png",

  'shower rain and drizzle': "/icons/brokenClouds.png",

  'very heavy rain': "/icons/brokenClouds.png",

  'heavy shower rain and drizzle': "/icons/brokenClouds.png",

  'shower drizzle': "/icons/brokenClouds.png",

  'extreme rain': "/icons/brokenClouds.png",

  'freezing rain': "/icons/brokenClouds.png",
  
  "few clouds": (dateNumber>5 && dateNumber<=17) ? "/icons/cloudsDay.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/cloudsNight.png" :null,
  
  "scattered clouds": "/icons/scatteredClouds.png",

  "broken clouds": "/icons/brokenClouds.png",
  
  "shower rain": (dateNumber>5 && dateNumber<=17) ? "/icons/showerDay.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/showerNight.png" :null,
  
  "rain": "/icons/rain.png",

  "thunderstorm": "/icons/thunderstorm.png",

  "snow": "/icons/snow.png",

  "mist": "/icons/mist.png",
  
  "moderate rain": (dateNumber>5 && dateNumber<=17) ? "/icons/showerDay.png":
  ((dateNumber >= 18 && dateNumber <= 23) || (dateNumber >= 0 && dateNumber < 4)) ? "/icons/showerNight.png" :null,
  
  "overcast clouds": "/icons/brokenClouds.png"
}
  return (
    <img className="pb-[1.5rem] pl-2" src={weatherIcons[weather.weather[0].description]} alt="Icons" />
  )
}
export default WeatherIcons