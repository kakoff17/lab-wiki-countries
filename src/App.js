import { useState } from 'react';
import './App.css';
import countries from "./countries.json"
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {

  const [countriesData, setCountriesData] = useState(countries)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countriesData} />}/>
        <Route path="/country/:alpha3code" element={<CountryDetails countries={countriesData} />} />
      </Routes>
    </div>
  );
}
export default App;