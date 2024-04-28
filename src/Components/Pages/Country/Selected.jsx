// import { Link } from "react-router-dom";



// const Selected = ({country}) => {
//     const {description , photo , spot, cost , season , time, visitor, _id} = country;
//     return (
//         <div>
//             <div className="card card-side h-80 lg:w-[600px] w-96 bg-base-100 shadow-xl">
//                 <figure><img className="rounded-2xl w-96 h-full" src={photo} alt="Movie" /></figure>
//                 <div className="card-body bg-blue-50">
//                     <h2 className="card-title font-medium text-blue-500">{spot}</h2>
//                     <p>{description.split(' ').slice(0, 10).join(' ')}...</p>
                    
//                     <div className='flex justify-around'>
//                         <p className='text-lg font-medium text-blue-800 '>{location}</p>
//                         <p className='text-lg font-medium text-pink-700 '>Cost:<span>{cost}</span></p>
//                     </div>

//                     <div className='flex justify-around'>
//                         <p className='text-lg font-medium text-blue-600 '>Season:<span>{season}</span></p>
//                         <p className='text-lg font-medium text-pink-700 '>Time:<span>{time}</span></p>
//                     </div>
//                     <div className='flex justify-around gap-x-4'>
//                         <p className='text-lg font-medium text-blue-600 '>Country:<span>{country}</span></p>
//                         <p className='text-sm font-normal text-pink-700 '>Visitor:<span>{visitor}(per year)</span></p>
//                     </div>
                    
                       
                    
//                     <div className="card-actions  justify-end">

//                         <Link to={`/view/${_id}`}><button className='btn'>View Details</button> </Link>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// // Selected.propTypes = {
// //     country:PropTypes.array
// // }

// export default Selected;