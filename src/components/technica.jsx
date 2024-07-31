import PropTypes from "prop-types";
const Technica=({children})=>{
    return (
        <div className="flex shrink-1 h-[89vh] bg-technica border-t-2 border-black">
            <div className="flex w-[38vw] border-r-2 border-black justify-center items-center">
                <div className="flex flex-shrink-0 w-clamp-24vw-24vw-30vw h-clamp-24vw-25vw-40vw background-image"></div>
            </div>
            <div className="flex flex-grow shrink-1 justify-center items-center">
                <div className="flex flex-col items-start justify-center font-about font-normal text-base sm:text-3xl md:text-4xl lg:text-5xl w-[53vw] h-[55vh] color-about leading-loose sm:leading-relaxed md:leading-snug lg:leading-normal">
                    {children}
                </div>
            </div>
        </div>
    );
}
Technica.propTypes={
    children: PropTypes.node.isRequired,
}

export default Technica;