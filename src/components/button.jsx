import PropTypes from "prop-types";
const Button=({children})=>{
    return (
        <button className="inline-flex w-17vw lg:w-17vw md:15vw sm:13vw h-[10vh] bg-button rounded-[5vh] items-center justify-center py-[1vh] px-[1vw] font-about font-normal leading text-base sm:text-xl md:text-2xl lg:text-3xl mt-10 lg:mt-10 md:mt-8 sm:mt-6 border-2 border-about">{children}</button>
    );
}
Button.propTypes={
    children: PropTypes.node.isRequired,
}

export default Button;