import "../index.css";

function Home() {
    return (
        <div className="h-screen w-full">
            <div className="h-1/3 w-full bg-[#fefbec] flex justify-center items-center">
                <p className="font-main font-extrabold text-9xl">HORIZON'24</p>
            </div>

            
            <div className="flex w-full bg-[#b5ddc2] items-center p-8 h-2/3 border-t-black border-b-black border-2">
                <div className="w-2/3 h-full border-r-black border-r-2">
                    <br /> <br />
                    <span className="block text-5xl font-poppins font-light">One of the Biggest Technical</span><br />
                    <span className="block text-5xl font-poppins ">Fests in India <span className="font-extrabold">is back in 2024</span></span><br />
                    <span className="block text-3xl mb-4 font-poppins">See you at Horizon!</span><br />
                    <button type="submit" className="bg-[#F2C6AB] px-6 py-4 border-black border-2 rounded-full text-2xl ">Register Now</button>
                </div>
                <div className="w-1/3 flex ml-14 h-full ">
                    <img className="h-[55vh] w-[30vw] rounded-lg border-black border-2" src="/homepage.png" />
                </div>
            </div>
        </div>
    );
}

export default Home;
