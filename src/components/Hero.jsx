import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/yanasorn.jpg"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div>
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 mt-10">
                    <div className="flex flex-col items-center lg:items-start">
                     <motion.h1 animate={{x:25}}  className="pl-8 pb-12 text-8xl font-thin tracking-tight lg:mt-8 lg:tex8x"> Yanasorn Yeedaung</motion.h1>
                     <motion.span animate={{x:25}} className="pl-10 bg-gradient-to-tr from-green-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                       I'm Engineer
                     </motion.span>
                      <motion.p animate={{x:25}} className="pl-10 my-2 text-2xl max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 mt-2">
                    <div className="flex justify-center">
                         <img src={profilePic} alt="Yanasorn Yeedaung" className="w-3/4 opacity-40 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
