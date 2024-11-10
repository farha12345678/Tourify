import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllSpotCard = ({ spots }) => {
  const { _id, spot, photo, description } = spots;

  return (
    <div className="hover:scale-105 transition-transform duration-300 w-96 mx-auto">
      <div className="card bg-base-100 shadow-lg rounded-xl overflow-hidden w-full h-80 flex flex-col">
        <figure className="h-40 w-full overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={photo}
            alt={spot}
          />
        </figure>
        <div className="card-body bg-blue-50 flex flex-col justify-between p-4">
          <div>
            <h2 className="card-title font-semibold text-blue-500 text-lg mb-2">
              {spot}
            </h2>
            <p className="text-gray-700 text-sm mb-4">
              {description.split(" ").slice(0, 10).join(" ")}...
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/view/${_id}`}>
              <button className="btn bg-blue-500 text-white hover:bg-blue-600">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

AllSpotCard.propTypes = {
  spots: PropTypes.object.isRequired,
};

export default AllSpotCard;
