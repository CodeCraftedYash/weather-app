import React, { useEffect, useState } from 'react';
import LineChart from '../components/LineChart';
import { type WeatherChartType } from '../types/weatherChartType';
import { useWeatherStore } from '../store/weatherStore';

const WeatherChartUi: React.FC<WeatherChartType> = ({ data, date, filter}) => {
  const [weatherData, setWeatherData] = useState<{
    temperature: number[];
    precipitation: number[];
    time: string[];
    windSpeed: number[];
  } | null>(null);
  const { setWeatherMaxMin } = useWeatherStore();

  useEffect(()=>{
    if(data?.hourly){
      if (!date)return;
    const baseDay = Number(date.split("|")[0]);
    const today = parseInt(data.hourly.time[0].split("T")[0].split("-")[2]);
    const index = baseDay - today ;
    if (index < 0 || index > 2) return;
    const {temperature_2m,precipitation,time,wind_speed_10m} = data.hourly;
      if (
      temperature_2m.length < 72 ||
      precipitation.length < 72 ||
      time.length < 72 ||
      wind_speed_10m.length < 72
    ) return;

    const temperatureData = [temperature_2m.slice(0,24),temperature_2m.slice(24,48),temperature_2m.slice(48,72)]
    const precipitationData = [precipitation.slice(0,24),precipitation.slice(24,48),precipitation.slice(48,72)]
    const windSpeedData = [wind_speed_10m.slice(0,24),wind_speed_10m.slice(24,48),wind_speed_10m.slice(48,72)]
    const timeData = [time.slice(0,24),time.slice(24,48),time.slice(48,72)]
        setWeatherData(
         {temperature: temperatureData[index],
         precipitation:precipitationData[index] ,
         time: timeData[index],
         windSpeed: windSpeedData[index],}
        )
      }},[data?.hourly?.time[0],date]);


         useEffect(()=>{
      if(weatherData == null) return;
      setWeatherMaxMin({
    temperature: {
      max: Math.max(...weatherData?.temperature),
      min: Math.min(...weatherData?.temperature),
    },
    precipitation: {
      max: Math.max(...weatherData?.precipitation),
      min: Math.min(...weatherData?.precipitation),
    },
    windSpeed: {
      max: Math.max(...weatherData?.windSpeed),
      min: Math.min(...weatherData?.windSpeed),
    },
    
    
  })},[weatherData]) 
  
  const chartData = {
    labels: weatherData?.time.map((item)=>item.split("T")[1]) ?? [],
    datasets: [
      {
        label: filter,
        data:
          filter === "Temperature"
            ? weatherData?.temperature || []
            : filter === "Precipitation"
            ? weatherData?.precipitation || []
            : weatherData?.windSpeed || [],
        borderColor:
          filter === "Temperature"
            ? "orange"
            : filter === "Precipitation"
            ? "blue"
            : "green",
        fill: true,
      },
    ],
  };

  return (
    <div className='border-2 rounded-xl aspect-video'>
      <LineChart data={chartData} />
    </div>
  );
};

export default WeatherChartUi;
