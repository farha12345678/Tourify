import { useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ViewDetails = () => {
    const spotLoad = useLoaderData();
    const { id } = useParams();
    const spots = spotLoad.find((spot) => spot._id === id);

    return (
        <div className="container mx-auto p-4">
            {/* Hero Section */}
            <div
                className="hero w-full h-64 sm:h-72 md:h-96 lg:h-[400px] rounded-3xl mb-10 overflow-hidden shadow-lg"
                style={{ backgroundImage: 'url(https://i.ibb.co/jyxJrg7/pexels-kirandeepsingh-18244220.jpg)' }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        <Typewriter words={["Spot Details"]} loop={true} cursor cursorStyle="_" typeSpeed={70} delaySpeed={1000} />
                    </h1>
                </div>
            </div>

            {/* Details Section */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-8">
                    {/* Spot Image */}
                    <img
                        src={spots.photo}
                        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg object-cover"
                        alt="Spot Image"
                    />

                    {/* Spot Details */}
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-2/3 space-y-5">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-700">{spots.spot}</h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                            Location: <span className="text-blue-500">{spots.location}</span>
                        </h2>
                        <h3 className="text-lg md:text-xl font-medium text-gray-700">
                            Country: <span className="text-blue-500">{spots.country}</span>
                        </h3>
                        <p className="text-base md:text-lg font-normal text-gray-600">{spots.description}</p>

                        {/* Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Seasonality:
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.season}</span>
                            </div>
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Cost:
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.cost}</span>
                            </div>
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Duration:
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.time}</span>
                            </div>
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Visitors (per year):
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.visitor}</span>
                            </div>
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Contact:
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.email}</span>
                            </div>
                            <div className="flex flex-col text-blue-600 font-semibold">
                                Guide Name:
                                <span className="text-sm md:text-base bg-blue-100 p-2 rounded-lg border border-blue-500">{spots.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
