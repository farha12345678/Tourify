import Swal from 'sweetalert2'

const AddSpot = () => {

    const handleAddSpot = e => {
        e.preventDefault();
        const form = e.target;
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
        const addSpot = { photo, spot, country, location, description, cost, season, time, visitor, email, name }
        console.log(addSpot);
        // send data to the server
        fetch('http://localhost:5000/add',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire("Spot Added Successfully!");
                e.target.reset()
            }
            
        })

    }



    return (
        <div className="card mx-auto shrink-0 max-w-2xl my-10  shadow-2xl bg-base-100">
            <form onSubmit={handleAddSpot} className="grid grid-cols-2 my-5 mx-5 gap-x-5">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Tourist Spot Name</span>
                    </label>
                    <input type="text" name="spot" placeholder="Spot Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                    <input type="text" name="country" placeholder="Country Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Short Description</span>
                    </label>
                    <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Average Cost</span>
                    </label>
                    <input type="text" name="cost" placeholder="Average Cost" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Seasonality</span>
                    </label>
                    <input type="text" name="season" placeholder="Seasonality" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Travel Time</span>
                    </label>
                    <input type="text" name="time" placeholder="Travel Time" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Total Visitor(per year)</span>
                    </label>
                    <input type="text" name="visitor" placeholder="Total Visitor" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Email</span>
                    </label>
                    <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <button className="btn w-full bg-blue-500 mt-10 text-lg font-medium">Add</button>
            </form>
        </div>
    );
};

export default AddSpot;