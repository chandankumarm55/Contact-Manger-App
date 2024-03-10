import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import UpdateContact from "./UpdateContact"; // Import the UpdateContact component
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) {
            setContacts(retrieveContacts);
        }
    }, []);

    const addContactHandler = (contact) => {
        const updatedContacts = [...contacts, { id: uuid(), ...contact }];
        setContacts(updatedContacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
    };

    const updateContactHandler = (id, updatedContact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === id ? {...contact, ...updatedContact } : contact
        );
        setContacts(updatedContacts);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
    };


    return ( <
            BrowserRouter >
            <
            Header / >
            <
            Routes >
            <
            Route path = "/add"
            element = { < AddContact addContactHandler = { addContactHandler }
                contacts = { contacts }
                />} / >
                <
                Route path = "/"
                element = { < ContactList contacts = { contacts }
                    getContactId = { removeContactHandler }
                    />} / >
                    <
                    Route path = "/update/:id"
                    element = { < UpdateContact updateContactHandler = { updateContactHandler }
                        contacts = { contacts }
                        />} / >
                        <
                        /Routes> <
                        /BrowserRouter>
                    );
                }

                export default App;