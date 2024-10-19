import { useState, useEffect } from "react";
import Button from "./Button";

const Hero = () => {

  
  
  const [show, setShow] = useState(true)
  
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setShow(!show)
  //   }, 6500)
  // },[show])

  return (
    <div className="relative overflow-hidden h-screen">
      <div className={`text-[#F1F1F1] bg-[#E62554] h-screen w-full flex flex-col justify-evenly px-4 md:px-10 pb-16 items-center absolute transition-all duration-1000 md:flex-row-reverse bg-pattern ${show? "z-20 left-0 opacity-100": "z-0 left-full opacity-0"}`}>
        <img src="family.png" alt="Family with a newborn" className="self-center w-[240px] md:w-[350px]"/>
        <div className="flex flex-col gap-4 w-fit">
        <h1 className="font-bold text-2xl md:text-3xl">
          Maricarmen Sánchez <br />
          Health & Life Consultant
        </h1>
        <p className="text-sm md:text-base">
          Entiendo que como inmigrantes es <br />
          posible que tengamos muchas preguntas
          <br />
          sobre cómo funcionan los seguros de salud. <br />
          <br />
          Contáctame y obten una asesoría gratuita.
        </p>
        <Button></Button>
        </div>
      </div>
      <div className={`bg-[#F1F1F1] text-[#E62554] h-screen w-full flex flex-col justify-evenly px-4 pb-10 items-center absolute transition-all duration-1000 md:flex-row-reverse ${show? "z-0 left-full opacity-0": "z-20 left-0 opacity-100"}`}>
        <img src="old-people.png" alt="A couple of old people"  className="self-center w-[240px] md:w-[350px]"/>
        <div className="flex flex-col gap-4 w-fit">
        <h2 className="font-bold text-2xl md:text-3xl">Medicare</h2>
        <p className="text-sm md:text-base">No más preocupaciones sobre costos <br />
            imprevistos de salud. Con Medicare puedes<br />
            enfocarte en lo más importante: vivir la vida al<br />
            máximo. Descubre hoy cómo Medicare puede<br />
            darte la paz mental que mereces.<br /><br />
            ¡Tu bienestar es nuestra prioridad!</p>
        <Button bg={"clear"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
