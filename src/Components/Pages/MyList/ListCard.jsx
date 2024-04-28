
import { PropTypes } from 'prop-types';
const ListCard = ({list}) => {
    const {name,country , email} = list
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
                            <td>update</td>
                            <td>delete</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};
ListCard.propTypes = {
    list:PropTypes.object
}

export default ListCard;