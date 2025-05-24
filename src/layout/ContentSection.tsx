import { useWeatherStore } from "../store/weatherStore";
import Cloud from "../ui/Cloud"
import Ground from "../ui/Ground"
import SunMoon from "../ui/SunMoon"
import WindMill from "../ui/WindMill"

function ContentSection() {
const { maxMin } = useWeatherStore();
const temperature = maxMin?.temperature;
const precipitation = maxMin?.precipitation;
const windSpeed = maxMin?.windSpeed;
 console.log(temperature,precipitation,windSpeed);
  return (
    <div className="w-[80dvw] relative md:w-[50dvw] mx-auto mt-1 border-4 h-[45dvh]  text-black sky-gradient rounded-2xl overflow-hidden">
      <div className="w-full  h-32 absolute bottom-0">
        <div className="scale-150 max-sm:scale-150 origin-bottom-right absolute z-10 bottom-0">
        <Ground />
        </div>
        <div className="absolute bottom-[30%] translate-4 z-10 origin-bottom scale-75 lg:translate-x-40 md:scale-100 lg:scale-105"><WindMill/></div>
          </div>
        <div className="absolute w-[20vw] aspect-square left-[50%] translate-x-[-50%] top-2 z-10"><div className="scale-[90%]"><SunMoon time="day" /></div></div>
        <div className="w-30 h-30 absolute overflow-hidden opacity-90"><div className="scale-[40%] absolute origin-top-left"><Cloud /></div></div>
    </div>
  )
}

export default ContentSection