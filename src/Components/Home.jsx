import "../index.css";

function Home() {
    return (
        <div className="h-screen w-full">
            <div className="h-1/3 w-full bg-[#fefbec] flex justify-center items-center">
                <p className="font-main font-extrabold text-9xl">HORIZON'24</p>
            </div>

            
            <div className="flex w-full bg-[#b5ddc2] h-full items-center p-8 h-2/3">
                <div className="w-2/3">
                    <span className="block text-2xl font-semibold">One of the Biggest Technical</span><br />
                    <span className="block text-2xl font-semibold">Fests in India <span>is back in 2024</span></span><br />
                    <span className="block text-2xl font-semibold mb-4">See you at Horizon!</span><br />
                    <button type="submit" className="bg-[#F2C6AB] px-4 py-2 rounded-lg text-lg font-bold">Register Now</button>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img className="h-[50vh]" src="/homepage.png" />
                </div>
            </div>
        </div>
    );
}

export default Home;
