import "./App.css";
import { Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CountryDetailsPage from "./pages/CountryDetailsPage"
import NavBar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      
      <NavBar />

      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/:countryId"} element={<CountryDetailsPage />} />


      </Routes>
    </div>
  );
}

export default App;
