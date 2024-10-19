const Button = ({bg})=>{
    if(bg === "clear"){
        return(
            <a className="bg-[#E62554] text-[#F1F1F1] font-semibold max-w-[324px] w-full rounded-2xl md:text-xl py-4 px-6 text-center" target="_blank" href="https://wa.me/12017131341">
                Consultoría Gratuita
            </a>
        )
    }else{
        return(
            <a className="bg-[#F1F1F1] text-[#ff4365] font-semibold max-w-[324px] w-full rounded-2xl md:text-xl py-4 px-6 text-center" target="_blank" href="https://wa.me/12017131341">
            Consultoría Gratuita
        </a>
        )
    }
}

export default Button