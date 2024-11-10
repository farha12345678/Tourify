import { useLoaderData } from "react-router-dom";
import AllSpotCard from "./AllSpotCard";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const AllSpot = () => {
  const spotLoad = useLoaderData();

  // eslint-disable-next-line no-unused-vars
  const [sort, setSort] = useState("ascending");
  const [sortedData, setSortedData] = useState(spotLoad); // Initialize sorted data with loaded data

  const parseCost = (cost) => {
    if (cost === "Free" || cost.toLowerCase() === "free") {
      return 0;
    } else {
      return parseFloat(cost.replace(/[^0-9.-]+/g, ""));
    }
  };

  const handleSortBy = (direction) => {
    const sortedArray = [...sortedData].sort((a, b) => 
      direction === "ascending"
        ? parseCost(a.cost) - parseCost(b.cost)
        : parseCost(b.cost) - parseCost(a.cost)
    );
    
    setSortedData(sortedArray); // Update sorted data
    setSort(direction); // Update the sort direction
  };

  return (
    <div className="px-4 lg:px-8">
      <div className="flex justify-center mb-6">
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn m-1 mt-6 flex items-center gap-3"
          >
            Sort By <FaAngleDown />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSortBy("ascending")}>
              <button>Ascending</button>
            </li>
            <li onClick={() => handleSortBy("descending")}>
              <button>Descending</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-y-4 gap-x-2 mx-auto">
        {sortedData.map((spots) => (
          <AllSpotCard key={spots._id} spots={spots} />
        ))}
      </div>
    </div>
  );
};

export default AllSpot;
