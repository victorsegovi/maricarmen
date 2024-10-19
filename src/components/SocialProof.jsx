import { useRef, useState } from "react";
import Button from "./Button";
import { FaPlay } from "react-icons/fa";

const SocialProof = () => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(true);

  const handleClick = () => {
    if (videoRef.current.paused) {
      setPlay(false);
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      setPlay(true);
    }
  };

  return (
    <section className="bg-[#460E36] bg-pattern flex flex-col items-center gap-4 p-4 md:p-10 scroll-m-[120px]" id="social-proof">
        <h2 className="font-bold text-2xl text-[#F1F1F1] md:text-3xl">Casos de Éxito</h2>
        <div
          className="w-2/3 max-w-[324px] relative"
          onClick={handleClick}
        >
          <video
            src="./social-proof.mp4"
            ref={videoRef}
            autoPlay
            className="rounded-md"
          ></video>
          <FaPlay
            className={`text-4xl text-[#f1f1f1] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
              play ? "block" : "hidden"
            }`}
          ></FaPlay>
        </div>
        <Button></Button>

    </section>
  );
};

export default SocialProof