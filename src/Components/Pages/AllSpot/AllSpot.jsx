import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";


const AllSpot = () => {
    const spotLoad = useLoaderData()

    const [displaySpot, setDisplaySpot] = useState(spotLoad)


    const handleFilter = filter => {

        if (filter === 'All') {
            setDisplaySpot(spotLoad)
        } else if (filter === 'Bangladesh') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Bangladesh')
            setDisplaySpot(spotBd)
        }
        else if (filter === 'Thailand') {
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
        }else if (filter === 'Cambodia') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Cambodia')
            setDisplaySpot(spotBd)
        }
        else if (filter === 'Indonesia') {
            const spotBd = spotLoad.filter(spot => spot.country === 'Indonesia')
            setDisplaySpot(spotBd)
        }
        
    }
    return (
        <div>
            <div className="text-center my-10">
                <h1 className="font-semibold text-4xl">All Tourists Spots</h1>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">Select Country</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleFilter('All')}><a>All</a></li>
                        <li onClick={()=>handleFilter('Bangladesh')}><a>Bangladesh</a></li>
                        <li onClick={()=>handleFilter('Thailand')}><a>Thailand</a></li>
                        <li onClick={()=>handleFilter('Vietnam')}><a>Vietnam</a></li>
                        <li onClick={()=>handleFilter('Indonesia')}><a>Indonesia</a></li>
                        <li onClick={()=>handleFilter('Cambodia')}><a>Cambodia</a></li>
                    </ul>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 mx-5">
                {
                    displaySpot.map(spots => <AllSpotCard key={spots._id} spots={spots}></AllSpotCard>)
                }
            </div>


        </div>

    );
};

export default AllSpot;