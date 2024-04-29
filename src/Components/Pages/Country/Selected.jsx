import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';



const Selected = ({data}) => {
    // const { photo ,country, spot, cost , season ,location, time, visitor} = data;
    // console.log(data);
    return (
        <div>
            <h1>Countries : {data.spot}</h1>
             
           
             <div className="card card-side h-80 lg:w-[600px] w-96 bg-base-100 shadow-xl">
                <figure><img className="rounded-2xl w-96 h-full" src={data.photo} alt="Movie" /></figure>
                <div className="card-body bg-blue-50">
                    <h2 className="card-title font-medium text-blue-500">{data.spot}</h2>
                    
                    
                    <div className='flex justify-around'>
                        <p className='text-lg font-medium text-blue-800 '>{data.location}</p>
                        <p className='text-lg font-medium text-pink-700 '>Cost:<span>{data.cost}</span></p>
                    </div>

                    {/* <div className='flex justify-around'>
                        <p className='text-lg font-medium text-blue-600 '>Season:<span>{season}</span></p>
                        <p className='text-lg font-medium text-pink-700 '>Time:<span>{time}</span></p>
                    </div>
                    <div className='flex justify-around gap-x-4'>
                        <p className='text-lg font-medium text-blue-600 '>Country:<span>{country}</span></p>
                        <p className='text-sm font-normal text-pink-700 '>Visitor:<span>{visitor}(per year)</span></p>
                    </div> */}
                    
                       
                    
                    <div className="card-actions  justify-end">

                       

                    </div>
                </div>
            </div> 
        </div>
    );
};
Selected.propTypes = {
    data:PropTypes.object
}

export default Selected;