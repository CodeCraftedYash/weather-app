import Cloud from "../ui/Cloud"
import Ground from "../ui/Ground"
import House from "../ui/House"
import SunMoon from "../ui/SunMoon"
import WindMill from "../ui/WindMill"

function ContentSection() {
  return (
    <div className="w-[90%] relative md:w-[60%] mx-auto mt-1 border-4 min-h-[40dvh] text-black sky-gradient rounded-2xl ">

        <div className="absolute box-border w-full bottom-0 h-12 lg:h-14 z-10 overflow-hidden "><div className="lg:translate-y-[-50px] lg:scale-y-[40%]  lg:scale-x-[130%] lg:translate-x-[110px] scale-x-[180%] translate-y-[-15px]"><Ground /></div></div>

        <div className="absolute w-[30vw] aspect-square left-[60%] translate-x-[-50%] bottom-8 z-11 lg:bottom-[-130px]"><div className="scale-200 lg:scale-[70%]"><House /></div></div>

        <div className="absolute w-[100px] aspect-square left-[20%] translate-x-[-50%] bottom-8 z-11 translate-y-3 lg:scale-[120%] lg:left-[30%] lg:bottom-[25px] lg:translate-x-[30%] "><WindMill/></div>

        <div className="absolute w-[20vw] aspect-square left-[50%] translate-x-[-50%] top-2 z-10"><div className="scale-[90%]"><SunMoon time="day" /></div></div>

        <div className="w-30 h-30 absolute overflow-hidden opacity-90"><div className="scale-[40%] absolute origin-top-left"><Cloud /></div></div>
    </div>
  )
}

export default ContentSection