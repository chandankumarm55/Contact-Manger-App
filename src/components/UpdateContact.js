import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const UpdateContact = ({ updateContactHandler, contacts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({});


    useEffect(() => {
        const selectedContact = contacts.find((contact) => contact.id === id);
        setContact(selectedContact);
    }, [id, contacts]);

    const handleUpdate = () => {
        updateContactHandler(id, contact);
        navigate("/");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleBack = () => {
        navigate("/");
    };

    return ( <
        div className = "container"
        style = {
            { marginTop: '40px' } } >
        <
        h2 > Update Contact < /h2> <
        form onSubmit = { handleUpdate } >
        <
        div className = "form-group" >
        <
        label > Name < /label> <
        input type = "text"
        className = "form-control"
        name = "name"
        value = { contact.name || "" }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "form-group" >
        <
        label > Phone Number < /label> <
        input type = "text"
        className = "form-control"
        name = "phoneNumber"
        value = { contact.phoneNumber || "" }
        onChange = { handleChange }
        /> <
        /div> <
        div className = "mb-3"
        style = {
            { marginTop: '30px' } } >
        <
        button type = "submit"
        className = "btn btn-primary mr-2" > Update < /button> <
        button type = "button"
        className = "btn btn-secondary"
        onClick = { handleBack }
        style = {
            { float: 'right' } }

        >
        Back < /button> <
        /div> <
        /form> <
        /div>
    );
};

export default UpdateContact;