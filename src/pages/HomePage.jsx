import { useState, useEffect } from "react";
import { Link } from "react-router-dom";




function HomePage() {
const [allCountries, setAllCountries]= useState(null)

useEffect(()=>{
    fetch("https://ih-countries-api.herokuapp.com")
    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        
        setAllCountries(data.results)
    })
    .catch((error)=>{
        console.log(error)
    })
}, [])


return (
    <div >
        <h2>WikiCountries: Your Guide to the World</h2>
        

    </div>
)
}

export default HomePage;
