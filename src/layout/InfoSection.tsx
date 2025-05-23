import SearchBar from "../components/SearchBar"
import { useLocationStore } from "../store/locationStore"
import LocationDataLayout from "./LocationDataLayout"
import WeatherDataLayout from "./WeatherDataLayout"
function InfoSection() {
  const {longitude} = useLocationStore();
  return (
    <div className="w-[100%] h-full 
    flex flex-col gap-y-4 box-border pb-2 overflow-y-scroll lg:flex-row">
      <div className="flex flex-col items-center gap-2">
        <div className="hidden md:block mt-4"><SearchBar/></div>
        {longitude&&<LocationDataLayout />}
      </div>
        {longitude&&<WeatherDataLayout />}
    </div>
  )
}

export default InfoSection