import "../index.css";

function Home() {
    return (
        <div>
            <div className="hidden lg:block h-screen w-full overflow-hidden bg-[#b5ddc2]">
                <div className="h-1/3 w-full bg-[#fefbec] flex justify-center items-center">
                    <p className="text-slate-800 font-main text-[13.6vw]">HORIZON'24</p>
                </div>
                <div className="flex w-full bg-[#b5ddc2] items-center h-2/3 border-t-black border-b-black border-2">
                    <div className="w-2/3 h-full border-black border-r-2 p-8 m-10">
                        <br /> <br />
                        <span className="block text-5xl font-poppins font-thin">One of the Biggest Technical</span><br />
                        <span className="block text-5xl font-poppins font-thin">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                        <span className="block text-3xl mb-[6vh] font-poppins font-thin">See you at Horizon!</span><br />
                        <button type="submit" className="bg-[#F2C6AB] px-6 py-4 border-black border-2 rounded-full text-2xl">Register Now</button>
                    </div>
                    <div className="w-1/3 h-full flex items-center relative">
                        <img className="h-[55vh] w-[29.4vw]" src="/homepage.png" />
                    </div>
                </div>
            </div>

            <div className="lg:hidden h-screen w-full overflow-hidden bg-[#b5ddc2]">
                <div className="h-[16vh] md:h-[11vh] w-full bg-[#fefbec] flex justify-center items-center">
                    <p className="font-main text-slate-800 text-[14vw] md:text-[13vw]">HORIZON'24</p>
                </div>
                <div className="w-full items-center h-[84vh] lg:border-t-black lg:border-b-black lg:border-2">
                    <div className="w-full h-full border-black relative">
                        <div className="h-[20vh] ml-[4vw] mt-[5vh] md:mt-[7vh] md:text-center">
                            <span className="text-[2.5vh] md:text-[3.5vh] font-poppins font-thin">One of the Biggest Technical</span><br />
                            <span className="block my-2 md:my-1 text-[2.5vh] md:text-[3.5vh] font-poppins font-thin">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                            <span className="text-[2.5vh] md:text-[3.5vh] font-poppins font-thin block">Sed vestibulum diam auctor, </span>
                            <span className="text-[2.5vh] md:text-[3.5vh] mb-4 font-poppins font-thin">tincidunt <span className="font-extrabold">mi nec</span></span><br />
                        </div>
                        <div className="flex flex-col items-center justify-center h-[55vh] mt-8">
                            <img className="h-[35vh] w-[80vw] md:w-[60vw] md:mt-24 " src="/homepage.png" />
                            <div className="flex items-center">
                            <button type="submit" className="bg-[#F2C6AB] px-2 py-2 mt-8 border-black border-2 rounded-lg text-3xl md:mt-16">Register Now</button>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}

export default Home;
