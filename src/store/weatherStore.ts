import { create } from "zustand";

interface MaxMin {
  max: number;
  min: number;
}

interface WeatherMaxMin {
  temperature: MaxMin;
  precipitation: MaxMin;
  windSpeed: MaxMin;
}

interface WeatherStore {
  maxMin: WeatherMaxMin | null;
  setWeatherMaxMin: (data: WeatherMaxMin) => void;
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  maxMin: null,
  setWeatherMaxMin: (data) => set({ maxMin: data }),
}));
