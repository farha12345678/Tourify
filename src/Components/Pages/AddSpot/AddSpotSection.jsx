import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";

const AddSpotSection = () => {
    const spotLoad = useLoaderData();

    return (
        <div className="container mx-auto">
            <div className="text-center my-10">
                <h1 className="font-bold text-3xl lg:text-4xl">Tourists Spots</h1>
                <p className="mt-2 font-medium text-blue-600">
                    Explore the most beautiful scenery to enjoy your life...
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-x-24 gap-x-4 lg:mx-8">
                {spotLoad?.slice(0, 6).map((spots) => (
                    <SpotCard key={spots?._id} spots={spots}></SpotCard>
                ))}
            </div>
            <div className="text-center my-5">
                <Link to="/all">
                    <button className="text-blue-500 font-bold text-lg lg:text-xl">
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AddSpotSection;
