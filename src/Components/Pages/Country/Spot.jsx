



import { useLoaderData, useParams } from "react-router-dom";



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
                {/* {
                     countries.map(country => <Selected key={country._id} country={country}></Selected>)
                } */}
            </div>
        </div>
    );
};

export default Spot;