import Header from "./components/header/Header";
import About from "./components/About/About";
import About_inform from "./components/About_inform/About_inform";
import Map from "./components/Map/Map";
import Cost from './components/Cost/Cost'; 
import Hotel_cost from "./Hotel_cost/Hotel_cost";


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <About_inform />
      <Map />
      <Cost/>
      <Hotel_cost/>
    </div>
  );
}

export default App;
