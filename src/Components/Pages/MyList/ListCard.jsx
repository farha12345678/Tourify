
import { PropTypes } from 'prop-types';
import { MdDelete } from 'react-icons/md';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ListCard = ({ list, onDelete }) => {
    const { spot, country, cost, _id } = list


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/add/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                            onDelete(_id)
                        }

                    })
            }
        });
    }
    return (
        <div>
             <div className="overflow-x-auto">
                <table className="table">
                   
                    <thead>
                        <tr className='text-xl font-bold'>
                            <th>Country</th>
                            <th>Tourists Spot</th>
                            <th>Cost</th>
                            <th>Update Data</th>
                            <th>Delete Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th className='text-base text-blue-600'>{country}</th>
                            <td className='text-base text-blue-600'>{spot}</td>
                            <td className='text-base text-blue-600'>{cost}</td>
                            
                            <td><Link className='btn text-blue-500 text-lg' to={`/update/${_id}`}>Update</Link></td>
                            <td onClick={() => handleDelete(_id)} className='btn text-red-500 text-lg mt-2'>Delete<MdDelete></MdDelete></td>
                        </tr>

                    </tbody>
                </table>
            </div> 
            
        </div>
    );
};
ListCard.propTypes = {
    list: PropTypes.object,
    onDelete: PropTypes.func.isRequired
}

export default ListCard;