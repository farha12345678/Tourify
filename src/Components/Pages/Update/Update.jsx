import { useLoaderData, useParams } from "react-router-dom";


const Update = () => {
    const updateLoad = useLoaderData()
    const { id } = useParams();
    const updates = updateLoad.find(update => update._id == id);
    console.log(updates);
    console.log(updateLoad);



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
    }
    return (
        <div>
            <div className="card mx-auto shrink-0 max-w-2xl my-10  shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="grid grid-cols-2 my-5 mx-5 gap-x-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Photo URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={updates.photo} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Tourist Spot Name</span>
                    </label>
                    <input type="text" name="spot" defaultValue={updates.spot}className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                    <input type="text" name="country" defaultValue={updates.country} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Location</span>
                    </label>
                    <input type="text" name="location" defaultValue={updates.location} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <input type="text" name="description" defaultValue={updates.description} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Average Cost</span>
                    </label>
                    <input type="text" name="cost" defaultValue={updates.cost} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Seasonality</span>
                    </label>
                    <input type="text" name="season" defaultValue={updates.season} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Travel Time</span>
                    </label>
                    <input type="text" name="time" defaultValue={updates.time} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Total Visitor(per year)</span>
                    </label>
                    <input type="text" name="visitor" defaultValue={updates.visitor} className="input input-bordered" required />
                </div>
                
                <button className="btn w-full bg-blue-500 mt-10 text-lg font-medium">Update</button>
            </form>
        </div>
        </div>
    );
};

export default Update;