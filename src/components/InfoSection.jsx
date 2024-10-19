import Info from "./Info";
import Button from "./Button";
import { IoPerson } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { IoGlassesOutline } from "react-icons/io5";
import { RiToothLine } from "react-icons/ri";

const InfoSection = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-[#F1F1F1] md:flex-row md:flex-wrap md:gap-4 md:justify-around md:p-10">
      <Info
        title={"Sobre Mí"}
        text={
          "¡Hola! Soy Maricarmen Sanchez, tu asesora de seguros de confianza. Soy Venezolana residente en New Jersey. Mi pasión es servir y cuidar a quien lo necesita, por eso soy tu opción ideal para empezar en el mundo de los seguros de salud."
        }
        icon={<IoPerson />}
      ></Info>
      <Info
        title={"Casos de Éxito"}
        text={
          "Cientos de personas se han visto beneficiadas por mi asesoramiento. Estas son demostraciones, no solo de conformidad con mi trabajo, sino casos de éxito donde la vida de mi cliente mejoró exponencialmente."
        }
        icon={<GoGoal />}
      ></Info>
      <Info
        title={"Mejora Tu Plan"}
        text={
          "Inicia en el mundo de los seguros de salud con el pié derecho. Agenda una consultoría gratuita conmigo YA."
        }
        icon={<FaSearch />}
      ></Info>
      <Info
        title={"Obamacare"}
        text={
          "GetCoveredNJ ofrece opciones de cobertura de salud en New Jersey. Los residentes pueden calificar para inscripción especial por eventos de vida o ingresos. Con subsidios, más personas pueden recibir ayuda financiera para reducir el costo de las primas."
        }
        icon={<FaStethoscope />}
      ></Info>
      <Info
        title={"Medicare"}
        text={
          "Medicare en New Jersey ofrece cobertura de salud para mayores de 65 años y personas con discapacidades. Elige entre Medicare Original y Medicare Advantage, con opciones adicionales para medicamentos y cobertura suplementaria."
        }
        icon={<IoGlassesOutline />}
      ></Info>
      <Info
        title={"Seguro Dental"}
        text={
          "Seguro Dental en New Jersey ofrece cobertura accesible para tus necesidades dentales. Con planes que incluyen limpiezas, exámenes, y tratamientos, puedes mantener tu salud bucal sin preocupaciones financieras. ¡Protege tu sonrisa hoy mismo!"
        }
        icon={<RiToothLine />}
      ></Info>
      <Button bg={"clear"}></Button>
    </div>
  );
};

export default InfoSection;
