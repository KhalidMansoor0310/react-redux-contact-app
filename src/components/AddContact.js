import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddContact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const contacts = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit=(e)=>{
        e.preventDefault();

        if(!name || !email || !phone){
            return toast.warning("Please fill all the fields");
        }
        const checkEmail = contacts.find(contact => contact.email === email);
        if(checkEmail){
            return toast.error("Email already exists");
        }
        const checkNumber = contacts.find(contact => contact.phone === phone);
        if(checkNumber){
            return toast.error("Phone number already exists");
        }

        const data = {
            id:contacts[contacts.length-1].id+1,
            name,
            email,
            phone
        }
        dispatch({type:"ADD_CONTACT",payload:data});
        history.push("/");
        toast.success("Contact added successfully");

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto my-5">
                    <h3 className='my-5 text-center'>Add New Student</h3>
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
                            <input type="submit" className="btn btn-block btn-dark form-control" value="Add Student" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact
