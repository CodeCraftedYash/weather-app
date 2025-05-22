import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch"
import { useLocationStore } from "../store/locationStore"
import WeatherHeader from "../ui/WeatherHeader";
import Loading from "../ui/Loading";
import { type filter } from "../types/weatherDataType";
import WeatherChartUi from "../ui/WeatherChartUi";
function WeatherDataLayout() {
    const {latitude,longitude} = useLocationStore();
    const [ weatherUrl,setWeatherUrl ] = useState<string>("");
    const { data, loading, error } = useFetch(weatherUrl);
    const [ date,setDate ] = useState<string>("");
    const [ filter, setFilter] = useState<filter>("Temperature");
    useEffect(() =>{
        if(latitude && longitude){
            setWeatherUrl(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,wind_speed_10m&timezone=auto&forecast_days=3`);
        }

    },[latitude,longitude])
    useEffect(()=>{
       if (data && !error) {
      const firstDate = data.hourly?.time?.[0];
      if (firstDate) {
        const [_, m, d] = firstDate.split("T")[0].split("-");
        setDate(`${d}|${m}`);
      }
    }
    },[data,error])
  return (
    <div className="w-[90%] h-fit md:min-h-fit p-2 bg-linear-90 from-blue-600 via-blue-400 to-blue-300 border-4 rounded-xl flex flex-col gap-2 font-bold m-auto relative md:mr-8 md:scale-105 mb-4">
       <WeatherHeader date={date}  setDate={setDate} filter={filter} setFilter={setFilter} />

       {loading&&<div className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"><Loading /></div>}
       <div className="bg-white rounded-xl">
        <WeatherChartUi data={data} date={date?date:""} filter={filter} />
        </div>
       </div>
  )
}

export default WeatherDataLayout