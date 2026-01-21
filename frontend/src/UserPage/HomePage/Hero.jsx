import { motion } from "motion/react"
export default function Hero(){
   const Parentvariant = {
        hidden:{
        y:-50,
            opacity:0
        },
        show:{
            y:0,
            opacity:1,
            transition:{
                staggerChildren:0.3,
                duration:2
            }
        }
   }
    return(
        <>
            <div className="hero md:bg-[#ECECEC] md:w-full md:h-xl md:flex">
                <div className="md:w-3/6">
                <div className="name p-20 md:p-40">
                    <motion.div className="md:flex  md:gap-5" variants={Parentvariant} animate="show" initial="hidden">
                    <motion.h1 className="text-black text-2xl" variants={Parentvariant}>I'M</motion.h1>
                    <motion.h1 className="text-blue-700 text-3xl font-bold" variants={Parentvariant}>Vishwas K N </motion.h1> 
                    </motion.div>   
                    <div>
                         <motion.p className="text-black text-sm md:ml-1" initial={{x:-50,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2}}>MBA Finance Graduate</motion.p>
                         <span className="border-2 flex w-5 border-blue-800 md:flex md:w-10 md:mt-2"></span>
                    </div>              
                </div>   
                </div>
                <div className="md:w-3/6">
                   <img src="Images/Vishwas.png" className="md:w-2xl md:h-2xl " alt="" />
                </div>
            </div>
        </>
    )
}