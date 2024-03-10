import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ContactList = (props) => {
    const { contacts, getContactId } = props;

    const deleteContactHandler = (id) => {
        getContactId(id);
    };

    const renderContactList = contacts.map((contact) => ( <
        ContactCard contact = { contact }
        clickHandler = { deleteContactHandler }
        key = { contact.id }
        />
    ));

    return ( <
        div className = "container mt-5" >
        <
        div className = "d-flex justify-content-between align-items-center mb-3" >
        <
        h2 className = "mb-0" > Contact List < /h2> <
        Link to = "/add" >
        <
        button className = "btn btn-primary" > Add < /button> <
        /Link> <
        /div> {
            contacts.length > 0 ? ( <
                div className = "list-group"
                style = {
                    { marginBottom: '10px !important' } } > { renderContactList } < /div>
            ) : ( <
                p > No contacts available. < /p>
            )
        } <
        /div>
    );
};

export default ContactList;