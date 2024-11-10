import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ListCard = ({ list, onDelete }) => {
  const { spot, country, cost, _id } = list;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-bay-six.vercel.app/add/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              onDelete(_id);
            }
          });
      }
    });
  };

  return (
    <tr className="hover:bg-blue-100 transition duration-300">
      <td className="p-4 border-b">{country}</td>
      <td className="p-4 border-b">{spot}</td>
      <td className="p-4 border-b">{cost}</td>
      <td className="p-4 border-b">
        <Link
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          to={`/update/${_id}`}
        >
          Update
        </Link>
      </td>
      <td className="border-b">
       
        <button
          onClick={() => handleDelete(_id)}
          className="flex gap-1 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          <MdDelete className="text-lg" />
          <span>Delete</span>
        </button>
        
      </td>
    </tr>
  );
};

ListCard.propTypes = {
  list: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ListCard;
