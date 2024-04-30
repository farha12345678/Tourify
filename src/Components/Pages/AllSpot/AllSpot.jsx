
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";


const AllSpot = () => {
    const spotLoad = useLoaderData()
     const { cost } = spotLoad;
    const costs = parseInt(cost)
    console.log(spotLoad);

    const [sort , setSort] = useState("ascending");

    const parseCost = (costs) => {
        if(costs ==="Free" || costs === "free" || costs === "FREE"){
            return 0;
        }
        else{
            return parseFloat (costs.replace(/[^0-9.-]+/g,""))
        }
    }

    const handleSortBy = () => {
        if(sort === "ascending"){
            spotLoad.sort (
                (a,b) => parseCost(a.cost) - parseCost(b.cost)
            )
            setSort("descending")

        } 
        else {
            spotLoad.sort (
                (a,b) => parseCost(b.cost) - parseCost(a.cost)
            )
            setSort("ascending")
        }
    }




    return (
        <div>
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0}
                        role="button"
                        className="btn m-1 mt-6 flex items-center gap-3"
                    >Sort By <FaAngleDown></FaAngleDown>

                    </div>
                    <ul tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li onClick={() => handleSortBy({ costs })}>
                            <a>Average Cost</a>

                        </li>

                    </ul>
                </div>

            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 mx-5">
                {
                    spotLoad.map(spots => <AllSpotCard key={spots._id} spots={spots}></AllSpotCard>)
                }
            </div>


        </div>

    );
};

export default AllSpot;