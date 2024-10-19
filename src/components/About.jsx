import { useRef, useState } from "react";
import Button from "./Button"
import { FaPlay } from "react-icons/fa";

const About = ()=>{

    const videoRefMobile = useRef(null)
    const videoRefDesktop = useRef(null)
    const [play, setPlay] = useState(true)

    const handleClickMobile = ()=>{
        if(videoRefMobile.current.paused){
            setPlay(false)
            videoRefMobile.current.play()
        } else{
            videoRefMobile.current.pause()
            setPlay(true)
        }
    }

    const handleClickDesktop = ()=>{
        if(videoRefDesktop.current.paused){
            setPlay(false)
            videoRefDesktop.current.play()
        } else{
            videoRefDesktop.current.pause()
            setPlay(true)
        }
    }

    return(
        <section className="p-4 bg-[#E62554] bg-pattern md:p-10 scroll-m-[120px]" id="about">
            <div className="flex flex-col items-center gap-4 md:hidden">
                <h2 className="font-bold text-2xl text-[#F1F1F1]">Sobre Mí</h2>
                <div className="w-2/3 max-w-[324px] relative" onClick={handleClickMobile}>
                <video src="./about-me.mp4" ref={videoRefMobile} autoPlay className="rounded-md"></video>
                <FaPlay className={`text-4xl text-[#f1f1f1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${play? "block": "hidden"}`}></FaPlay>
                </div>
                <Button></Button>
            </div>
            <div className="hidden md:flex justify-evenly">
                <div className="flex flex-col gap-4 justify-center">
                <h2 className="font-bold text-3xl text-[#F1F1F1]">Sobre Mí</h2>
                <p className=" text-[#F1F1F1]">¡Hola! Soy Maricarmen Sanchez,<br />
                tu asesora de seguros de confianza.<br />
                Soy Venezolana residente en New Jersey.<br />
                Mi pasión es servir y cuidar<br />
                a quien lo necesita, por eso soy<br />
                tu opción ideal para empezar en el<br />
                mundo de los seguros de salud.</p>
                <Button></Button>
                </div>
                <div className="w-2/3 max-w-[324px] relative" onClick={handleClickDesktop}>
                <video src="./about-me.mp4" ref={videoRefDesktop} autoPlay className="rounded-md"></video>
                <FaPlay className={`text-4xl text-[#f1f1f1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${play? "block": "hidden"}`}></FaPlay>
                </div>
            </div>
        </section>
    )
}

export default About