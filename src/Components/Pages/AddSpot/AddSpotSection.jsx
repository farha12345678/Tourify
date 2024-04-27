import { Link, useLoaderData } from "react-router-dom";
import SpotCard from "./SpotCard";


const AddSpotSection = () => {
    const spotLoad = useLoaderData()

    // const [displaySpot, setDisplaySpot] = useState(spotLoad)
    

    // const handleFilter = filter => {

    //     if (filter === 'All') {
    //         setDisplaySpot(spotLoad)
    //     } else if (filter === 'Bangladesh') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Bangladesh')
    //         setDisplaySpot(spotBd)
    //     }
    //     else if (filter === 'Thailand') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Thailand')
    //         setDisplaySpot(spotBd)
    //     }
    //     else if (filter === 'Malaysia') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Malaysia')
    //         setDisplaySpot(spotBd)
    //     }
    //     else if (filter === 'Vietnam') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Vietnam')
    //         setDisplaySpot(spotBd)
    //     }
    // }

    return (
        <div>
             <div className="text-center my-10">
                <h1 className="font-semibold text-4xl">Tourists Spots</h1>
                
            </div> 
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4 mx-5">
                {
                    spotLoad.slice(0,6).map(spots => <SpotCard key={spots._id} spots={spots}></SpotCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/all'><button>See All</button></Link>
            </div>
        </div>
    );
};

export default AddSpotSection;