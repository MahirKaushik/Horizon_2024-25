import PropTypes from "prop-types";

const Slogan = ({ children }) => {
  return (
    <div className="flex max-w-full h-[14vh] p-[0.768vw] justify-center items-center flex-shrink-1 border-t-2 border-b-2 border-black bg-custom overflow-hidden">
        <div className="flex max-w-full h-[1.3vh] text-base sm:text-4xl md:text-5xl lg:text-6xl font-slogan shrink-1 text-center items-center justify-center uppercase leading-normal tracking-normal">
        {children}
        </div>
    </div>
  );
};

Slogan.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slogan;
