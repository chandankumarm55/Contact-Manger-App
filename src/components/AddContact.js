import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AddContact = ({ addContactHandler, contacts }) => {
        const navigate = useNavigate(); // Access navigate function
        const [name, setName] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [error, setError] = useState("");

        const add = (e) => {
            e.preventDefault();
            if (name === "" || phoneNumber === "") {
                setError("All the fields are mandatory!");
                return;
            }
            if (!/^\d{10}$/.test(phoneNumber)) {
                setError("Phone number should be 10 digits long!");
                return;
            }
            // Check if phone number already exists with another name
            const existingContact = contacts.find((contact) => contact.phoneNumber === phoneNumber);
            if (existingContact) {
                setError(`Phone number ${phoneNumber} is already registered with ${existingContact.name}`);
                return;
            }
            addContactHandler({ name, phoneNumber }); // Call addContactHandler with contact data
            setName(""); // Clear input fields
            setPhoneNumber("");
            setError("");
            navigate("/"); // Navigate to home path after adding contact
        };
        const handleBack = () => {
            navigate("/");
        };
        return ( <
            div style = {
                { marginTop: '40px', marginLeft: '30px', marginRight: '30px' } } >
            <
            h2 > Add Contact < /h2> {
                error && < div className = "alert alert-danger" > { error } < /div>} <
                    form onSubmit = { add } >
                    <
                    div className = "mb-3" >
                    <
                    label className = "form-label"
                style = {
                        { fontSize: '18px' } } > Name < /label> <
                    input
                type = "text"
                className = "form-control"
                placeholder = "Please Enter a Name"
                value = { name }
                onChange = {
                    (e) => setName(e.target.value) }
                /> <
                /div> <
                div className = "mb-3" >
                    <
                    label className = "form-label"
                style = {
                        { fontSize: '18px' } } > PhoneNumber < /label> <
                    input
                type = "text"
                className = "form-control"
                placeholder = "Please Enter a Phone Number"
                value = { phoneNumber }
                onChange = {
                    (e) => setPhoneNumber(e.target.value) }
                /> <
                /div> <
                div className = "mb-3"
                style = {
                        { marginTop: '30px' } } >
                    <
                    button type = "submit"
                className = "btn btn-primary" > Add < /button> <
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

        export default AddContact;