import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const SpotCard = ({ spots }) => {
    const { _id, spot, photo, description, cost, location, country, visitor, season, time } = spots;


    return (
        <div>
            <div className="card flex-col lg:flex-row card-side h-auto lg:w-[500px] w-80 bg-base-100 shadow-xl">
            <img src={photo} className="lg:max-w-xs md:w-96 w-60 rounded-lg shadow-2xl" />
                <div className="card-body bg-blue-50">
                    <h2 className="card-title font-medium text-blue-500">{spot}</h2>
                    <p>{description.split(' ').slice(0, 10).join(' ')}...</p>
                    
                    <div className='flex justify-around'>
                        <p className='text-lg font-medium text-blue-800 '>{location}</p>
                        <p className='text-lg font-medium text-pink-700 '>Cost:<span>{cost}</span></p>
                    </div>

                    <div className='flex justify-around'>
                        <p className='text-lg font-medium text-blue-600 '>Season:<span>{season}</span></p>
                        <p className='text-lg font-medium text-pink-700 '>Time:<span>{time}</span></p>
                    </div>
                    <div className='flex justify-around gap-x-4'>
                        <p className='text-lg font-medium text-blue-600 '>Country:<span>{country}</span></p>
                        <p className='text-sm font-normal text-pink-700 '>Visitor:<span>{visitor}(per year)</span></p>
                    </div>
                    
                       
                    
                    <div className="card-actions  justify-end">

                        <Link to={`/view/${_id}`}><button className='btn'>View Details</button> </Link>

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