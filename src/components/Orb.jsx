const Orb = ({perspective})=>{
    return(
        <div className={`w-[150px] h-[150px] rounded-[99999px] bg-[#FF4365] shadow-[5px_5px_15px_rgba(0,0,0,.15)] blur transition-all duration-1000 absolute ${perspective == 1? "scale-1/2 orb-1": perspective == 3? "scale-[1.5] orb-3": perspective == 2?" orb-2": ""}`}>
        </div>
    )
}

export default Orb