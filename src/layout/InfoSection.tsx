import SearchBar from "../components/SearchBar"
import { useLocationStore } from "../store/locationStore"
import LocationDataLayout from "./LocationDataLayout"
import WeatherDataLayout from "./WeatherDataLayout"
function InfoSection() {
  const {longitude} = useLocationStore();
  return (
    <div className="w-[100%]  max-h-[16rem] md:max-h-[30rem] md:h-[23rem] flex flex-col gap-4 overflow-y-scroll md:flex-row">
      <div className="flex flex-col items-center gap-2 ">
        <div className="hidden md:block mt-4"><SearchBar/></div>
        {longitude&&<LocationDataLayout />}
      </div>
        {longitude&&<WeatherDataLayout />}
      
    </div>
  )
}

export default InfoSection