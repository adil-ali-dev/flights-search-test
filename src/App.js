import './App.css';
import { FeatureSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import NearByAirports from './pages/NearbyAirports';
import Airports from './pages/SearchAirports';
import SearchFlights from './pages/SearchFlight';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <Airports></Airports>
      <NearByAirports></NearByAirports>
      <SearchFlights></SearchFlights>

    </div>
  );
}

export default App;
