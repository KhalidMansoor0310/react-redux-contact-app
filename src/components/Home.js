import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

function Home() {
    const contacts = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();
    const deleteContact = (id) => {
        dispatch({ type: "DELETE_CONTACT", payload: id });
        toast.success("Contact deleted successfully");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-right">
                    <Link to="/add" className="btn btn-outline-dark my-4">Add Contact</Link>
                </div>
                <div className="col-md-8 m-auto">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                  <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <Link to={`/edit/${contact.id}`} className="btn btn-outline-primary ">Edit</Link>
                                       <button className='btn btn-outline-danger' onClick={()=>deleteContact(contact.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Home
