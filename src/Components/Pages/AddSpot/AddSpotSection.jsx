import { useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";
import { useState } from "react";


const AddSpotSection = () => {
    const spotLoad = useLoaderData()
    
    const [displaySpot, setDisplaySpot] = useState(spotLoad)
    

    const handleFilter = filter => {
        
        if (filter === 'All') {
            setDisplaySpot(spotLoad)
        } else if (filter === 'Bangladesh') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Bangladesh')
            setDisplaySpot(spotBd)
        }
         else if(filter === 'Thailand') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Thailand')
            setDisplaySpot(spotBd)
        }
         else if (filter === 'Malaysia') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Malaysia')
            setDisplaySpot(spotBd)
        }
         else if (filter === 'Vietnam') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Vietnam')
            setDisplaySpot(spotBd)
        }
    }

    return (
        <div>
            <div className="text-center my-10">
                <h1 className="font-semibold text-4xl">Tourists Spots</h1>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={() => handleFilter('All')}><a>All</a></li>
                        <li onClick={()=> handleFilter('Bangladesh')}><a>Bangladesh</a></li>
                        <li onClick={()=> handleFilter('Thailand')}><a>Thailand</a></li>
                        <li onClick={()=> handleFilter('Malaysia')}><a>Malaysia</a></li>
                        <li onClick={()=> handleFilter('Vietnam')}><a>Vietnam</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 mx-5">
                {
                    displaySpot.map(spots => <SpotCard key={spots._id} spots={spots}></SpotCard>)
                }
            </div>
        </div>
    );
};

export default AddSpotSection;