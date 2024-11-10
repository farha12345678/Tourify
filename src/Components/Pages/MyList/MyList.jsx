import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ListCard from "./ListCard";

const MyList = () => {
  const { user } = useContext(AuthContext) || {};
  const [item, setItem] = useState([]);

  const handleDeleteItem = (_id) => {
    setItem((prevItems) => prevItems.filter((item) => item._id !== _id));
  };

  useEffect(() => {
    fetch(`https://assignment-10-server-bay-six.vercel.app/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center font-bold text-3xl my-10">
        <h1>My List</h1>
      </div>
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="table-auto w-full text-center">
          <thead className="bg-blue-500 text-white">
            <tr className="text-lg font-semibold">
              <th className="p-4">Country</th>
              <th className="p-4">Tourist Spot</th>
              <th className="p-4">Cost</th>
              <th className="p-4">Update</th>
              <th className="">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 text-blue-700">
            {item?.map((list) => (
              <ListCard key={list._id} list={list} onDelete={handleDeleteItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
