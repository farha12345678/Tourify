import { Link} from "react-router-dom";

import { PropTypes } from 'prop-types';


const CountryCard = ({country}) => {
    
    const {image , name , description } = country;
    return (
        <div>
            <div className="card w-96 bg-base-100 h-full shadow-xl">
                <figure className="px-10 h-44  pt-10">
                    <img src={image} />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <Link to={`/${name}`}><button className="btn btn-primary">See Tourist Spots</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
CountryCard.propTypes = {
    country : PropTypes.object
}

export default CountryCard;