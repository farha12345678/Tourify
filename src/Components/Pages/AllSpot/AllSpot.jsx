import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";


const AllSpot = () => {
    const spotLoad = useLoaderData()


    const [sort, setSort] = useState();
    const parseCost = (cost) => {
        if (cost === "Free" || cost === "free") {
            return 0;
        } else {
            return parseFloat(cost.replace(/[^0-9.-]+/g, ""))
        }

    }

    const handleSort = () => {
        if(sort === "asc"){
            spotLoad.sort(
                (a,b)=>parseCost(a.average_cost) - parseCost(b.average_cost)
            );
            setSort("desc")
        }else{
            spotLoad.sort(
                (a,b)=>parseCost(b.average_cost) - parseCost(a.average_cost)
            );setSort("asc")
        }
    }
    // const handleSortChange = (e) => {
    //     setSort(e.target.value);
    // };
    // const handleSort = () => {
    //     const sortedSpotLoad = [...spotLoad].sort((a, b) => {
    //         const costA = parseCost(a.average_cost);
    //         const costB = parseCost(b.average_cost);
    //         return sort === 'asc' ? costA - costB : costB - costA;
    //     });
    //     setSort(sort === 'asc' ? 'desc' : 'asc');

    //     setSort(sortedSpotLoad);
    // };





    return (
        <div>
            <div className="text-center my-10">
                <h1 className="font-semibold text-4xl">All Tourists Spots</h1>
                <div className="text-center">
                    <select onChange={handleSort}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    {/* <button onClick={handleSort}>Sort</button> */}
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