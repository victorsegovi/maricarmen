import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = ()=>{

    const [toggleBars, setToggleBars] = useState(false)

    function handleClick(){
        setToggleBars(!toggleBars)
    }

    function handleClickImage(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return(
        <header className="flex py-[30px] px-[16px] justify-between bg-[#F1F1F1] sticky top-0 items-center z-50 md:p-10">
            <img src="simbolo-color.svg" alt="" className="max-w-[60px] cursor-pointer" onClick={handleClickImage}/>
            <FaBarsStaggered  className="text-[40px] text-[#FF4365] md:hidden" onClick={handleClick}/>
            <ul className="uppercase flex justify-between w-1/2 font-semibold text-[#FF4365] desktop">
                    <li><a href="#about">Sobre Mí</a></li>
                    <li><a href="#social-proof">Clientes</a></li>
                    <li><a href="#upgrade">Mejora Tu Plan</a></li>
                </ul> 

            <div className={`text-xl font-semibold text-[#FF4365] absolute bg-[#F1F1F1] w-full h-screen left-0 py-[30px] px-[16px] flex flex-row-reverse justify-between transition-all duration-1000 md:hidden ${toggleBars? "top-0": "-top-[100vh]"}`}>
                <IoClose  className="text-6xl" onClick={handleClick}/>
                <ul className="uppercase flex flex-col justify-evenly items-left p-6 w-full">
                    <li><a href="">Sobre Mí</a></li>
                    <li><a href="">Clientes</a></li>
                    <li><a href="">Mejora Tu Plan</a></li>
                </ul> 
            </div>
        </header>
    )
}

export default Header