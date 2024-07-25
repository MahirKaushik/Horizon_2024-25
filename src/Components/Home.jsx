import "../index.css";

function Home() {
    return (
        <div>
            <div className="hidden lg:block h-screen w-full">
                <div className="h-1/3 w-full bg-[#fefbec] flex justify-center items-center">
                    <p className="font-main text-[12vw]">HORIZON'24</p>
                </div>
                <div className="flex w-full bg-[#b5ddc2] items-center h-2/3 border-t-black border-b-black border-2">
                    <div className="w-2/3 h-full border-black border-r-2 p-8 m-10">
                        <br /> <br />
                        <span className="block text-5xl font-poppins font-thin">One of the Biggest Technical</span><br />
                        <span className="block text-5xl font-poppins font-thin">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                        <span className="block text-3xl mb-4 font-poppins font-thin">See you at Horizon!</span><br />
                        <button type="submit" className="bg-[#F2C6AB] px-6 py-4 border-black border-2 rounded-full text-2xl ">Register Now</button>
                    </div>
                    <div className="w-1/3 h-full flex items-center relative">
                        <img className="h-[55vh] w-[29.4vw]" src="/homepage.png" />
                        <img src="/mute.svg" className="absolute bottom-1 right-6 mb-9 mr-2 bg-[#F2C6AB] rounded-xl border-black border-2" />
                    </div>
                </div>
            </div>

            <div className="lg:hidden h-screen w-full">
                <div className="h-1/6 w-full bg-[#fefbec] flex justify-center items-center">
                    <p className="font-main text-[12vw]">HORIZON'24</p>
                </div>
                <div className="w-full bg-[#b5ddc2] items-center h-5/6 border-t-black border-b-black border-2">
                    <div className="w-full h-full border-black relative">
                        <br /> <br />
                        <span className="text-2xl font-poppins font-thin">One of the Biggest Technical</span><br />
                        <span className="block my-2 text-2xl font-poppins font-thin">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                        <span className="text-xl mb-4 font-poppins font-thin">Sed vestibulum diam auctor, tincidunt <span className="font-extrabold">mi nec</span></span><br />
                        <div className="w-full flex justify-center relative">
                            <img className="h-[30vh] w-[80vw] mt-8 mb-3" src="/homepage.png" />
                            <img src="/mute.svg" className="absolute bottom-1 right-6 mb-2 mr-2 bg-[#F2C6AB] rounded-xl border-black border-2 h-[5vh]" />
                        </div>
                        <div className="w-full flex justify-center">
                            <button type="submit" className="bg-[#F2C6AB] px-2 py-2 mt-4 border-black border-2 rounded-lg text-xl">Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
