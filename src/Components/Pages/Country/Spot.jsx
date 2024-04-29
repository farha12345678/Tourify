



import { useLoaderData, useParams } from "react-router-dom";
import Selected from "./Selected";



const Spot = () => {
   
    const spotLoad = useLoaderData()
    console.log(spotLoad);
    const { name } = useParams();
       const countries = spotLoad.filter(spot => spot.country == name);
      console.log(countries);
    

    return (
        <div>
            <div>
            <h1>Spot : {countries.length}</h1>
            </div>
            <div className="grid gap-y-10 lg:mx-20">
               
                {
                     countries?.map(country =><Selected key={country._id} country={country}></Selected>)
                }
            </div>
        </div>
    );
};

export default Spot;