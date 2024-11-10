import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SpotCard = ({ spots }) => {
    const { _id, spot, photo, description, cost, location, country, visitor, season, time } = spots;

    return (
        <div className="card card-side flex-col lg:flex-row bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
            {/* Image */}
            <div className="w-full lg:w-1/3 h-48 lg:h-auto">
                <img
                    src={photo}
                    alt={spot}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Card Body */}
            <div className="card-body p-4 md:p-6 bg-gray-50 flex flex-col justify-between lg:w-2/3">
                {/* Title */}
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">{spot}</h2>
                
                {/* Description */}
                <p className="text-gray-700 text-sm md:text-base mb-3">{description.split(' ').slice(0, 10).join(' ')}...</p>

                {/* Spot Details */}
                <div className="flex flex-wrap gap-4">
                    <p className="text-lg font-medium text-gray-800">Location: <span className="text-indigo-500">{location}</span></p>
                    <p className="text-lg font-medium text-gray-600">Cost: <span className="text-indigo-600">{cost}</span></p>
                    <p className="text-lg font-medium text-gray-800">Season: <span className="text-indigo-500">{season}</span></p>
                    <p className="text-lg font-medium text-gray-600">Time: <span className="text-indigo-600">{time}</span></p>
                    <p className="text-lg font-medium text-gray-800">Country: <span className="text-indigo-500">{country}</span></p>
                    <p className="text-lg font-medium text-gray-600">Visitors: <span className="text-indigo-500">{visitor} per year</span></p>
                </div>

                {/* View Details Button */}
                <div className="mt-4 flex justify-end">
                    <Link to={`/view/${_id}`}>
                        <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spots: PropTypes.object.isRequired
}

export default SpotCard;
