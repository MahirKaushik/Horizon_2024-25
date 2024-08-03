/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import Card from "./Components/Card";
import Carousel from "./Components/Carousel";


const cardData = [
  { title: 'Card 1', description: 'This is card 1', image: 'url1' },
  { title: 'Card 2', description: 'This is card 1', image: 'url1' },
  { title: 'Card 3', description: 'This is card 2', image: 'url2' },
  { title: 'Card 4', description: 'This is card 3', image: 'url3' },
  { title: 'Card 5', description: 'This is card 3', image: 'url3' }
  // Add more card data as needed
];

function App() {
  return (
    <>

    <div className="entire bg-[#FEFBEC]">
    <div className="workshops bg-[#B5DDC2] h-[177px] border-t-2 border-b-2 border-black flex justify-center items-center">
      <p className="text-[120px] font-bold leading-[144px] text-left font-itc-tiffany">WORKSHOPS</p>
    </div>

    <div >
      {/* her we will use map function to get multiple cards and make a */}
      <Carousel cardData={cardData} />

      </div>
      </div>
    </>
  );
}

export default App;
