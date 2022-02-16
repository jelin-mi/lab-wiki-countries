import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Error from './components/Error';
import Navbar from './components/Navbar';
import data from './countries.json';

function App() {
  const [countries, setCountries] = useState(data);

  useEffect(() => {
    setCountries(countries);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList countries={countries} />} />  
        <Route
          path="/countries/:alpha3Code"
          element={<CountryDetails countries={countries} />}
        />
        <Route path="/countries" element={<Navigate to="/" />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}
export default App;