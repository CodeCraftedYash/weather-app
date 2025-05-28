import { useRef,useEffect, useState } from "react";
import { useWeatherStore } from "../store/weatherStore";
import Cloud from "../ui/Cloud"
import Ground from "../ui/Ground"
import SunMoon from "../ui/SunMoon"
import WindMill from "../ui/WindMill"
import {motion} from "motion/react"
import { generateCirclePath } from "../utils/circleGenerate";
import RainCanvas from "../components/Rain";
function ContentSection() {
const { maxMin } = useWeatherStore();
const precipitation = maxMin?.precipitation;
const windSpeed = maxMin?.windSpeed;
const contentRef = useRef<HTMLDivElement | null>(null);
const [containerWidth, setContainerWidth] = useState(0); 
const [containerHeight, setContainerHeight] = useState(0); 
 useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    setContainerWidth(container.offsetWidth);
    setContainerHeight(container.offsetHeight);
}, []);
  const path=generateCirclePath(containerWidth, containerHeight, 200,true);
  const x = path?.x;
  const y = path?.y;
  const path2=generateCirclePath(containerWidth, containerHeight, 200,false);
  const x2 = path2?.x;
  const y2 = path2?.y;
  return (
    <motion.div className="w-[80dvw] relative md:w-[50dvw] mx-auto mt-1 border-4 h-[45dvh]  text-black  rounded-2xl overflow-hidden"
    ref={contentRef}
    animate={{backgroundImage:[
   "linear-gradient(to bottom, #fc7e35 10%, #a86d4a 90%)",
   "linear-gradient(to bottom, #3379e9 10%, #ffffff 90%)",
   "linear-gradient(to bottom, #3379e9 10%, #ffffff 90%)",
   "linear-gradient(to bottom, #fc7e35 10%, #a86d4a 90%)",
   "linear-gradient(to bottom, #110e1f 10%, #45434d 90%)",
   "linear-gradient(to bottom, #110e1f 10%, #45434d 90%)",
  ]}}
    transition={{
       duration: 100, 
       ease: "easeInOut", 
       repeat: Infinity, 
       repeatType: "loop",
        times: [0.0, 0.06, 0.40, 0.43,0.50, 1.0]
      }}
    >
      <div className="w-full  h-32 absolute bottom-0">
        <div className="scale-150 max-sm:scale-150 origin-bottom-right absolute z-10 bottom-0">
        <Ground />
        </div>
        <div className="absolute bottom-[30%] translate-4 z-10 origin-bottom scale-75 lg:translate-x-40 md:scale-100 lg:scale-105"><WindMill windSpeed={windSpeed?.max}/></div>
          </div>

        <div className="absolute border-2 h-[100%] z-0 w-[100%]">
  <motion.div
    className="w-fit absolute"
    animate={{x: x,y: y,}}
    transition={{ duration:100,ease:"linear",repeat:Infinity ,repeatType:"loop" }}
  >
    <SunMoon time="day" />
   </motion.div>

    <motion.div className="w-fit"
    animate={{x: x2,y: y2,}}
    transition={{ duration:100,ease:"linear",repeat:Infinity ,repeatType:"loop" }}
      >
          <SunMoon time="night" />
        </motion.div>
        </div>

        <motion.div className="w-30 h-30 absolute overflow-hidden opacity-90 z-20"
        animate={{x:[-200,containerWidth-10],y:[0,5,5,0,-5,-5,0],
          transition:{ duration:45,ease:"linear",repeat:Infinity}
        }}
        ><div className="scale-[40%] absolute origin-top-left"><Cloud cloudColorChoice={`${precipitation?.max?precipitation.max>=0.5?"black":"white":"white"}`} /></div></motion.div>
        <motion.div className="w-30 h-30 absolute overflow-hidden opacity-90 z-20 top-10 -left-20"
        animate={{x:[-180,containerWidth+50],y:[0,5,5,0,-5,-5,0],
          transition:{ duration:40,ease:"linear",repeat:Infinity}
        }}
        ><div className="scale-[40%] absolute origin-top-left"><Cloud cloudColorChoice={`${precipitation?.max?precipitation.max>=0.5?"black":"white":"white"}`}/></div></motion.div>
        <RainCanvas isActive={precipitation?.max?precipitation.max>=0.5?true:false:false} ContainerHeight={containerHeight} ContainerWidth={containerWidth}/>
    </motion.div> 
  )
}

export default ContentSection