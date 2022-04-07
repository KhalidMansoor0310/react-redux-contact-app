import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function EditContact() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const contacts = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const currentContact = contacts.find(contact => contact.id === parseInt(id));
        useEffect(() => {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);

        }, [currentContact]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !phone) {
            return toast.warning("Please fill all the fields");
        }

        const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email);
        if (checkEmail) {
            return toast.error("Email already exists");
        }
        const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.phone === phone);
        if (checkNumber) {
            return toast.error("Phone number already exists");
        }
        const data = {
            id: parseInt(id),
            name,
            email,
            phone
        }
        dispatch({ type: "EDIT_CONTACT", payload: data });
        history.push("/");
        toast.success("Contact updated successfully");

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto my-5">
                    <h3 className='my-5 text-center'>Edit Student - {id}</h3>
                    <form className='shadow p-5' onSubmit={handleSubmit}>
                        <div className="form-group my-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-3">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-3">
                            <input type="number"
                                className="form-control"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}

                            />
                        </div>
                        <div className="form-group my-3">
                            <input type="submit" className="btn btn-block btn-dark form-control" value="Edit Student" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact
