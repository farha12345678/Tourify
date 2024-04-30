import { useForm } from 'react-hook-form';
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
        fetch('https://assignment-10-server-bay-six.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire("Spot Added Successfully!");
                    e.target.reset()
                }

            })

    }
    // const countries = [
    //     "Bangladesh",
    //     "Thailand",
    //     "Indonesia",
    //     "Cambodia",
    //     "Vietnam",
    //     "Malaysia"


    // ]
    // const handleFilter = filter => {

    //     if (filter === 'All') {

    //     } else if (filter === 'Bangladesh') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Bangladesh')

    //     }
    //     else if (filter === 'Thailand') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Thailand')

    //     }
    //     else if (filter === 'Malaysia') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Malaysia')

    //     }
    //     else if (filter === 'Vietnam') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Vietnam')

    //     }else if (filter === 'Cambodia') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Cambodia')

    //     }
    //     else if (filter === 'Indonesia') {
    //         const spotBd = spotLoad.filter(spot => spot.country === 'Indonesia')

    //     }

    // }
    const {register} = useForm()



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
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                    <input type="text" name="country" placeholder="Country Name" className="input input-bordered" required />
                </div> */}

                {/* <div className="dropdown form-control flex-grow">
                <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                <input type="text" name="country" placeholder="Country Name" className="input input-bordered" required />
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {countries}
                        </li>
                    </ul>
                

            </div> */}
            <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-medium">Country Name</span>
                    </label>
                    <select className="input input-bordered w-full"  {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                    
                </select>
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