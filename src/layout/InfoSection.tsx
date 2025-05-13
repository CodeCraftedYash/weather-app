import SearchBar from "../components/SearchBar"
import LocationDataLayout from "./LocationDataLayout"

function InfoSection() {
  return (
    <div className="w-[90%] md:w-[60%] min-h-[40dvh] border-4 rounded-2xl text-black mx-auto mt-2">
      <SearchBar/>
      <LocationDataLayout />  
    </div>
  )
}

export default InfoSection