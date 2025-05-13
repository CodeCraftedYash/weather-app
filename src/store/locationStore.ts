import { create } from 'zustand';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  cityName: string | null;
  setLocation: (lat: number, lon: number,city:string) => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  latitude: null,
  longitude: null,
  cityName: null,
  setLocation: (lat, lon,city) => set({ latitude: lat, longitude: lon, cityName:city }),
}));
