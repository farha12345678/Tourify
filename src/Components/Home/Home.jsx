import Banner from "../Banner/Banner";

import AddSpotSection from "../Pages/AddSpot/AddSpotSection";
import AddCountry from "../Pages/Country/AddCountry";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AddSpotSection></AddSpotSection>
           <AddCountry></AddCountry>
        </div>
    );
};

export default Home;