

import { useLoaderData} from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const updates = useLoaderData()
    const { _id, spot, photo, description, cost, location, country, visitor, season, time } = updates;
   
    


    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target
        const photo = form.photo.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const email = form.email.value;
        const name = form.name.value;
        const addUpdate = { photo, spot, country, location, description, cost, season, time, visitor, email, name }
        console.log(addUpdate);
        // send data to the server
        fetch(`https://assignment-10-server-bay-six.vercel.app/add/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire("Spot Updated Successfully!");
                    e.target.reset()
                }

            })
    }
    return (
        <div>
            <h1 className="text-4xl font-bold">Update :{spot}</h1>
           
             <div className="card mx-auto shrink-0 max-w-2xl my-10  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="grid grid-cols-2 my-5 mx-5 gap-x-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Photo URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={photo} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Tourist Spot Name</span>
                    </label>
                    <input type="text" name="spot" defaultValue={spot}className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                    <input type="text" name="country"  defaultValue={country} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Location</span>
                    </label>
                    <input type="text" name="location" defaultValue={location} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={description} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Average Cost</span>
                    </label>
                    <input type="text" name="cost" defaultValue={cost} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Seasonality</span>
                    </label>
                    <input type="text" name="season" defaultValue={season} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Travel Time</span>
                    </label>
                    <input type="text" name="time" defaultValue={time} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Total Visitor(per year)</span>
                    </label>
                    <input type="text" name="visitor" defaultValue={visitor} className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Email</span>
                    </label>
                    <input type="text" name="email" disabled defaultValue={updates.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Name</span>
                    </label>
                    <input type="text" name="name" disabled defaultValue={updates.name} className="input input-bordered" />
                </div>
                
                <button className="btn w-full bg-blue-500 mt-10 text-lg font-medium">Update</button>
            </form>
        </div> 
        </div>
    );
};

export default Update;