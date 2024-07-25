    import "../index.css";

    function Home() {
        return (
            <div>
                <div className="hidden lg:block h-screen w-full overflow-hidden">
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
                            <img src="/mute.svg" className="absolute bottom-[5.7vh] right-[4.5vh] bg-[#F2C6AB] rounded-xl border-black border-2 h-[8vh] w-[4.5vw]" />
                        </div>
                    </div>
                </div>

                <div className="lg:hidden h-screen w-full overflow-hidden">
                    <div className="h-1/6 w-full bg-[#fefbec] flex justify-center items-center">
                        <p className="font-main text-[12vw]">HORIZON'24</p>
                    </div>
                    <div className="w-full bg-[#b5ddc2] items-center h-5/6 border-t-black border-b-black border-2">
                        <div className="w-full h-full border-black relative">
                            <div className="h-[30vh]">
                                <br /> <br />
                                <span className="text-[3vh] font-poppins font-thin">One of the Biggest Technical</span><br />
                                <span className="block my-2 text-[3vh] font-poppins font-thin">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                                <span className="text-[1.5vh] font-poppins font-thin block">Sed vestibulum diam auctor, </span>
                                <span className="text-[1.5vh] mb-4 font-poppins font-thin ">tincidunt <span className="font-extrabold">mi nec</span></span><br />
                            </div>
                            <div className="h-2/3 ">
                                <div className="w-full  flex justify-center relative">
                                    <img className="h-[30vh] w-[80vw] mt-8 mb-3" src="/homepage.png" />
                                    <img src="/mute.svg" className="absolute bottom-[1.4vh] right-[9.3vw] bg-[#F2C6AB] rounded-xl border-black border-2 h-[5vh] w-[10vw]" />
                                </div>
                                <div className="w-full flex justify-center">
                                    <button type="submit" className="bg-[#F2C6AB] px-2 py-2 mt-4 border-black border-2 rounded-lg text-xl">Register Now</button>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        );
    }

    export default Home;
