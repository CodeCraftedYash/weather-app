# temporary 
api for weather : https://api.open-meteo.com/v1/forecast?latitude=22.8028&longitude=86.1855&hourly=temperature_2m,precipitation,wind_speed_10m&timezone=auto&forecast_days=3

# errors encountered
found that weatherChartUi is being rendered many times , so have to check that states dont get updated needlessly in this and its parents

data{
    hourly{
        precipitation{}
        time{2025-05-18T00:00}
        temperature{}
        windspeed{}
    }
}