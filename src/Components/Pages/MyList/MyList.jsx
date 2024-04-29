import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ListCard from "./ListCard";


const MyList = () => {
    

    


    const { user } = useContext(AuthContext) || {}
    const [item , setItem] = useState([])
    const handleDeleteItem = _id => {
        setItem(prevItems => prevItems.filter(item => item._id !== _id));
    };
    console.log(user);
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
        .then(res=> res.json())
        .then(data=> {
            setItem(data);
        })

    }, [user])
    return (
        <div>
            <div className="text-center font-bold text-3xl my-10">
                <h1>My List</h1>
            </div>
            {
                item?.map(list=> <ListCard key={item._id} list={list} onDelete={handleDeleteItem}></ListCard>)
            }
        </div>
    );
};

export default MyList;