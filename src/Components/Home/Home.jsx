import Banner from "../Banner/Banner";

import AddSpotSection from "../Pages/AddSpot/AddSpotSection";
import AddCountry from "../Pages/Country/AddCountry";
import DiscountSec from "../Pages/Discount/DiscountSec";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AddSpotSection></AddSpotSection>
           <AddCountry></AddCountry>
           <DiscountSec></DiscountSec>
        </div>
    );
};

export default Home;