import PropTypes from "prop-types";

const Slogan = ({ children }) => {
  return (
    <>
    <div className="hidden custom:flex max-w-full h-[14vh] p-[0.768vw] justify-center items-center flex-shrink-1 border-t-2 border-b-2 border-black bg-custom overflow-hidden">
        <div className="text-slate-600 flex max-w-full h-[1.3vh] text-md md:text-5xl lg:text-6xl font-slogan shrink-1 text-center items-center justify-center uppercase leading-normal tracking-normal">
        {children}
        </div>
    </div>

    <div className="custom:hidden flex max-w-full h-[8vh] p-[0.768vw] justify-center items-center flex-shrink-1 border-t-2 border-b-2 border-black bg-custom overflow-hidden">
      <div className="text-slate-600 flex max-w-full h-[1.3vh] text-xl sm:text-4xl font-slogan shrink-1 text-center items-center justify-center uppercase leading-normal tracking-normal">
          {children}
      </div>
    </div>
    </>
    
  );
};

Slogan.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Slogan;
