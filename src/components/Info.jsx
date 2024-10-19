import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Info = ({ title, icon, text }) => {
  const [toggleInfo, setToggleInfo] = useState(true);

  const handleClick = () => {
    setToggleInfo(!toggleInfo);
  };

  return (
    <div>
      <div className="my-4 text-[#E35F76] shadow-md rounded-md max-w-[324px] w-full md:hidden">
        <div className="flex items-center justify-between w-full text-xl font-bold p-4">
          <h2>{title}</h2>
          <IoIosArrowDown onClick={handleClick} />
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            toggleInfo ? "h-0" : "h-fit p-4"
          }`}
        >
          <p className="font-normal">{text}</p>
        </div>
      </div>
      <div className="hidden md:flex relative rounded-lg overflow-hidden">
          <div className="flex flex-col gap-4 justify-center items-center p-4 bg-[#E35F76] w-[350px] h-[350px] font-bold text-[#F1F1F1]">
            <h2 className="text-2xl">{title}</h2>
            <p className="text-8xl">{icon}</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-8 bg-[#E35F76] cursor-pointer hover:opacity-100 transition-all duration-1000 opacity-0">
            <p className="text-[#F1F1F1] font-medium text-lg">{text}</p>
          </div>
      </div>
    </div>
  );
};

export default Info;
