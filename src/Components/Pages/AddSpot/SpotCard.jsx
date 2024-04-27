import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SpotCard = ({ spots }) => {
    const { _id, spot, photo, description } = spots;
    return (
        <div>
            <div className="card card-side lg:w-[650px] w-96 bg-base-100 shadow-xl">
                <figure><img className="h-64 rounded-2xl w-96" src={photo} alt="Movie" /></figure>
                <div className="card-body bg-blue-50">
                    <h2 className="card-title font-medium text-blue-500">{spot}</h2>
                    <p>{description.split(' ').slice(0, 10).join(' ')}...</p>
                   
                    <div className="card-actions  justify-end">

                        <Link to={`/view/${_id}`}><button className="btn ">View Details</button></Link>
                        <Link to={`/update/${_id}`} ><button className="btn">Update</button></Link>
                        <Link><button className="btn text-red-500"><MdDelete></MdDelete></button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

SpotCard.propTypes = {
    spots: PropTypes.object
}

export default SpotCard;