import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, phoneNumber } = props.contact;
    const { clickHandler } = props;

    const handleDelete = () => {
        clickHandler(id);
    };

    return ( <
        div className = "list-group-item d-flex justify-content-between align-items-center" > { /* Left side */ } <
        div className = "d-flex align-items-center" >
        <
        img className = "ui avatar image"
        src = { user }
        alt = "user" / >
        <
        div className = "ml-3" >
        <
        div className = "header" > { name } < /div> <
        div > { phoneNumber } < /div> <
        /div> <
        /div>

        { /* Right side */ } <
        div >
        <
        Link to = { `/update/${id}` } >
        <
        i className = "edit alternate outline icon"
        style = {
            { color: "blue", marginRight: "10px" } } > < /i> <
        /Link> <
        i className = "trash alternate outline icon"
        style = {
            { color: "red" } }
        onClick = { handleDelete } > < /i> <
        /div> <
        /div>
    );
};

export default ContactCard;