import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


const AddCountry = () => {
   
    const [countries , setCountry] = useState([])
    useEffect(() => {
        fetch('https://assignment-10-server-bay-six.vercel.app/countries')
        .then(res=>res.json())
        .then(data => {
            
            setCountry(data)
        })

    }, [])

    return (
        <div>
            <div className="text-center my-10">
            <h1 className="font-bold text-4xl">Country</h1>
            <p className="font-medium text-xl text-blue-600 mt-2">Countries you can visit to smell the real nature..</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-y-5 lg:mx-20 ">
                {
                    countries.map(country=> <CountryCard key={countries._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default AddCountry;