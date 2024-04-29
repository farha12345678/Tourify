



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
            <div>
                {/* {
                    countries.map(country=> <h1 key={country.spot}>{countries.name}</h1>)
                } */}
                {
                     countries?.map(data =><Selected key={data._id} country={data}></Selected>)
                }
            </div>
        </div>
    );
};

export default Spot;