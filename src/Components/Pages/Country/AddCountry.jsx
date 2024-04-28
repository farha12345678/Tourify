import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const AddCountry = () => {
   
    const [countries , setCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries')
        .then(res=>res.json())
        .then(data => {
            
            setCountry(data)
        })

    }, [])

    return (
        <div>
            <div className="text-center my-10">
            <h1 className="font-bold text-4xl">Country</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-y-5 mx-20 ">
                {
                    countries.map(country=> <CountryCard key={countries._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default AddCountry;