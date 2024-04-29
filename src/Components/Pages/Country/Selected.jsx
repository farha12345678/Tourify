import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';



const Selected = ({ country }) => {
    console.log(country);
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={country.photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country.spot}</h2>
                    <p>{country.description}</p>
                    <div className="grid gap-y-2 text-xl font-medium text-blue-500">
                        <p><span className="text-blue-800">Location:</span>{country.location}</p>
                        <p><span  className="text-blue-800">Country:</span>{country.country}</p>
                        <p ><span  className="text-blue-800">Cost: </span>{country.cost}</p>
                        <p ><span  className="text-blue-800">Season: </span>{country.season}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <Link to={`/view/${country._id}`}><button className='btn'>View Details</button> </Link>
                    </div>
                </div>
            </div>
        </div>



    );
};
Selected.propTypes = {
    country: PropTypes.object
}

export default Selected;