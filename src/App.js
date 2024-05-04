import './App.css';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Shipping from './Components/Shipping/Shipping';
import Story from './Components/Story/Story';
import WatchShop from './Components/WatchShop/WatchShop';


function App() {
  return (
    <div>
    <Navbar/>
    <Story/>
    <Hero/>
    <Shipping/>
    <WatchShop/>
    </div>
  );
}

export default App;
