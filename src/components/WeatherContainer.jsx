import { useState } from "react"
import WeatherStat from "./WeatherStat"
import WeatherIcons from "./WeatherIcons"

const WeatherContainer = ({weather}) => {
  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnitTemp=(temp)=>{
    if(isCelsius){
    //transformaciona celsius
      const celsiusTemp= (temp - 273.15).toFixed(1)
      return ` ${celsiusTemp}°C`
    }else{
    //transformaciona farenheit
    const fahrenheitTemp= (((temp - 273.15) * 9/5) + 32).toFixed(1)
    return `${fahrenheitTemp}°F`
      
    }
  }

const handleChangeUnit=()=>{
  setIsCelsius(!isCelsius)
}
  return (
    <section className="text-center gap-5 grid">
       <h3 className="text-3xl font-fantasy text-black transition-transform transform hover:scale-110">{weather.name}, {weather.sys.country}</h3>

          <div className="grid gap-5 sm:grid-cols-[1fr_auto] min-h-[200px] justify-center transition-transform transform hover:scale-110">
             {/*Seccion superios */}
            <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3">
                <h4 className="col-span-2 text-lg capitalize">{weather.weather[0].description}</h4>
                <span className="text-7xl pb-[1.5rem] pl-[1.5rem]">{changeUnitTemp(weather.main.temp)}</span>
                <picture className="grid justify-center">
                    {/* <img className="pb-[1.5rem]" src={weatherIcons[weather.weather[0].description]} alt="" /> */}
                    <WeatherIcons weather={weather}/>
                </picture>
            </article>

            {/* seccion inferior */}
            <article className="grid grid-cols-3 justify-items-center bg-slate-500/50 rounded-2xl p-2 py-3 sm:grid-cols-1 ">
              <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed}/>
              <WeatherStat icon="/humidity.png" unit="%" value={weather.main.humidity}/>
              <WeatherStat icon="/pressure.png" unit="hPa" value={weather.main.pressure}/>
            </article>
            
        </div> 

        <button className="m-[auto] w-28 bg-[#3D9EDE] rounded-xl hover:bg-sky-700 transition-transform transform hover:scale-110"onClick={handleChangeUnit}>C° / F°</button>
    </section>
  )
}
export default WeatherContainer