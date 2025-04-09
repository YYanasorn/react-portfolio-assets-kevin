import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="boarder-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-6xl ">
            <span className="pl-10 bg-gradient-to-tr from-green-300 via-slate-400 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">About Me</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-7">
                <div className="flex items-center justify-center w-7/8 opacity-50 rounded-lg">
                    <img src={aboutImg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2 pt-14 text-2xl">
                    <div className="flex justify-center lg:justify-start">
                        <p>{ABOUT_TEXT}</p>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default About
