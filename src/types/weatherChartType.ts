export type WeatherChartType = {
    data:{
        hourly:{
            precipitation:number[];
            temperature_2m:number[];
            time:string[];
            wind_speed_10m:number[];
        }
    };
    date:string;
    filter:"Temperature" | "Precipitation" | "Wind Speed";
}   