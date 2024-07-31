import Slogan from "./components/slogan"
import Technica from "./components/technica" 
import Button from "./components/button"
function App() {
  return (
    <>
    <Technica>One of the Biggest Technical Fests in India <span className="bolder">is back in 2024</span>
    <br/>
    {<div className="mt-3">Sed vestibulum diam auctor, tincidunt <span className="bolder">mi nec</span></div>}
    <div><Button>Register Now</Button></div>
    </Technica>
    <Slogan>INNOVATE | IDEATE | INSPIRE</Slogan>
    </>
  );
}

export default App;
