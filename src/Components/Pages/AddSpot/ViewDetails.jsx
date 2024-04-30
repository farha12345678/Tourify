import { useLoaderData, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const ViewDetails = () => {
    const spotLoad = useLoaderData()
    const { id } = useParams();
    const spots = spotLoad.find(spot => spot._id == id);
    console.log(spots);
    console.log(spotLoad);
    return (
        <div>
            <div className="hero w-96 h-96 container md:mx-auto lg:mx-auto md:w-[600px] lg:w-[1100px] lg:h-72 md:h-[250px] rounded-3xl mb-10" style={{ backgroundImage: 'url(https://i.ibb.co/jyxJrg7/pexels-kirandeepsingh-18244220.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                       
                        <div className="text-center">

                            <h1 className="text-center  text-white text-5xl font-bold my-10  "><Typewriter words={["Spot Details"]} loop={1000} cursor cursorStyle="_" typeSpeed={70} delaySpeed={1000} /></h1>

                        </div>

                    </div>
                </div>
            </div>

            {/* details sec */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={spots.photo} className="lg:max-w-md md:w-96 w-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{spots.spot}</h1>
                        <h2 className="text-2xl text-black mt-2  font-bold">Location: <span className="text-2xl text-blue-500 mt-2  font-bold">{spots.location}</span></h2>
                        <h3 className="text-xl text-black mt-2  font-bold">Country:<span className="text-2xl text-blue-500 mt-2  font-bold">{spots.country}</span></h3>
                        <p className="py-2 text-xl font-medium">{spots.description}</p>


                        <div className="flex gap-x-10 font-semibold text-xl">
                            <p>Seasonality: <span className="border-2 bg-blue-200 rounded-md border-blue-500">{spots.season}</span> </p>
                            <p>Cost: <span className="border-2 bg-blue-200 rounded-md border-blue-500"> {spots.cost}</span></p>
                            <p>For: <span className="border-2 bg-blue-200 rounded-md border-blue-500">{spots.time}</span></p>
                            <p>Visitor: <span className="border-2 bg-blue-200 rounded-md border-blue-500">{spots.visitor}(per year)</span></p>
                        </div>
                        <div className="flex gap-x-10 font-semibold text-xl mt-5">
                            <p>Email: <span className="border-2 bg-blue-200 rounded-md border-blue-500">{spots.email}</span></p>
                            <p>Name: <span className="border-2 bg-blue-200 rounded-md border-blue-500">{spots.name}</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;