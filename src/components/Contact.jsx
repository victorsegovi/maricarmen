import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsTextLeft } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Orb from "./Orb";

const Contact = () => {
  return (
    <section className="md:flex md:flex-row-reverse">
      <div className="bg-[#E62554] min-h-screen p-4 flex flex-col gap-8 justify-center items-center md:w-1/2 relative overflow-hidden">
      <Orb perspective={1}></Orb>
        <Orb perspective={2}></Orb>
        <Orb perspective={3}></Orb>
        <form action="" className="flex flex-col gap-4 max-w-[324px] z-10">
        <h2 className="text-2xl font-bold text-[#F1F1F1] md:text-3xl">
          Contacta Conmigo
        </h2>
          <div className="border relative flex rounded-lg">
            <FaUser  className="absolute top-3 left-2 text-lg text-[#F1F1F1]"/>
            <input type="text" placeholder="Nombre" 
            className="w-full px-8 py-2 bg-transparent text-[#f1f1f1] placeholder-[#f1f1f1]"/>
          </div>
          <div className="border relative flex rounded-lg">
            <FaEnvelope  className="absolute top-3 left-2 text-lg text-[#F1F1F1]"/>
            <input type="email" placeholder="Email" 
            className="w-full px-8 py-2 bg-transparent text-[#f1f1f1] placeholder-[#f1f1f1]"/>
          </div>
          <div className="border relative flex rounded-lg">
            <BsTextLeft  className="absolute top-3 left-2 text-lg text-[#F1F1F1]"/>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
              className="resize-none w-full px-8 py-2 bg-transparent text-[#f1f1f1] placeholder-[#f1f1f1]"
            ></textarea>
          </div>
          <button className="bg-[#F1F1F1] text-[#ff4365] font-semibold max-w-[324px] w-full rounded-2xl md:text-xl py-4 px-6 text-center z-index-5">
            Enviame un Mensaje
          </button>
        </form>
      </div>
      <div className="bg-[#460E36] min-h-screen p-4 flex flex-col gap-8 justify-center items-center text-[#F1F1F1] md:w-1/2">
      <div className="flex flex-col   w-[300px] items-start gap-4">
          <h2 className="text-2xl font-bold md:text-3xl">Más Información</h2>
          <a href="mailto:maricarmeninsurance@gmail.com" target="_blank" className="flex gap-4 items-center">
            <FaEnvelope /> maricarmeninsurance@gmail.com
          </a>
          <a href="msms://12017131341" target="_blank" className="flex gap-4 items-center">
          <FaPhoneAlt />
            +1 (201) 713-1341
          </a>
        </div>
        <div className="flex flex-col items-start gap-4 w-[300px]">
          <h2 className="text-2xl font-bold md:text-3xl">Mis Redes Sociales</h2>
          <a
            href="https://www.facebook.com/people/Maricarmen-Insurance/61551806203332/?sk=reels_tab"
            target="_blank" className="flex gap-4 items-center"
          >
            <FaMeta />
            Meta
          </a>
          <a
            href="https://www.instagram.com/maricarmeninsurance"
            target="_blank" className="flex gap-4 items-center"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
