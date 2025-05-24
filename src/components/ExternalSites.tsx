import { useState } from "react";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
function ExternalSites() {
    const title="visit my website"
    const [isHover,setIsHover] = useState(false);
  return (
    <div className="w-[40vw] md:w-[10vw] aspect-square relative mx-auto">
        <a className="w-full h-full bg-gradient-to-br from-purple-600 to-emerald-700 border-2 rounded-2xl box-border md:customHover hover:scale-95 hover:cursor-pointer absolute z-10 text-xl font-bold text-center  text-white p-4 pt-[30%]"onMouseOver={()=>setIsHover(true)}
         onMouseLeave={()=>setIsHover(false)}
         href="https://portfolio-self-three-24.vercel.app/"
         target="_blank"
         rel="noopener noreferrer"
         >
            {title}<HiMiniArrowTopRightOnSquare className={`font-bold text-2xl max-sm:animate-pulse duration-200 max-sm:text-cyan-300 absolute bottom-2 ${isHover?"text-cyan-300":""}`}/>
        </a>
        <div className="w-full h-full scale-90 rounded-2xl  absolute bg-black"></div>
    </div>
  )
}

export default ExternalSites