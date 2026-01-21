import '@fontsource/staatliches';
import '@fontsource-variable/playfair-display';
import '@fontsource/bitter';
import { motion} from "motion/react"
export default function About(){
  return (
    <>
      {/* About */}
      <div className=" w-full h-70 md:w-full md:h-52">
        <div className="card w-full h-92 md:w-full md:h-72 bg-white/20 backdrop:blur-lg border border-white/30 ">
          <div className=" w-full  h-full  flex md:w-full md:h-full md:flex">
            {/* first border */}
            <div className=" w-40 h-full md:w-40 md:h-full">
              <div className="p-3 h-full flex justify-center items-center md:p-3 md:h-full md:flex md:justify-center md:items-center">
                <span className="border-2 border-blue-800 h-30 md:h-30"></span>
              </div>
            </div>
            {/* about main */}
            <div className="about py-10 md:w-full w-full md:py-5">
              <motion.h1 className="text-center text-black text-3xl font-bold mb-2 md:mb-5" style={{fontFamily:" 'Staatliches', system-ui"}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,delay:1}}>
                About
              </motion.h1>
              <div className="w-57 md:w-full md:text-left text-center ">
                 <p className="text-black text-[10px] md:text-xl md:flex md:justify-center md:items-center font-medium antialiased" style={{fontFamily:"'Bitter', serif"}}>
                 I see finance as a way to create clarity where complexity exists. During my MBA in Finance, I learned to move beyond reports and ratios to understand how cash, efficiency, and decisions are connected. Through hands-on analysis of working capital and financial performance, I identified where value was tied up and how better financial insight could improve outcomes. My experience combining financial modeling, data analytics, and tools like Excel, Power BI, and SAP has allowed me to translate raw numbers into actionable insights that support faster decisions, stronger controls, and sustainable business performance.
              </p>
              </div>
             
            </div>
            {/* second border */}
            <div className=" w-40 h-full md:w-40 md:h-full">
                <div className=" p-3 h-full flex justify-center items-center md:p-3 md:h-full md:flex md:justify-center md:items-center">
                  <span className="border-2 border-blue-800 h-30 md:h-30"></span>
                </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
