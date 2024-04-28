
import { PropTypes } from 'prop-types';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const ListCard = ({ list , onDelete }) => {
    const { name, country, email, _id } = list
   

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
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>{name}</th>
                            <td>{email}</td>
                            <td>{country}</td>
                            <Link to={`/update/${_id}`}><td>Update</td></Link>
                            <td onClick={() => handleDelete(_id)} className='btn'>Delete</td>
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