import React, {useRef} from 'react';
import { Link } from "react-router-dom";
import ContactCard from './ContactCard';

const ContactList =(props) =>{
    const inputEl = useRef("");
    const deleteConactHandler = (id) => {
            props.getContactId(id);
        };

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            contact={contact} 
            clickHander = {deleteConactHandler} 
            key = { contact.id } 
            />
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    };
    return (
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <div className="btn"> <button className="ui button blue right">Add Contact</button></div>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input
                        ref={inputEl}
                        type ="text"
                        placeholder="Search contacts"
                        className="prompt"
                        value={props.term}
                        onChange={getSearchTerm}
                    />
                    <i className="search icon"></i>
                </div>
            </div>
        <div className="ui celled list">
            <div className ="ui celled List">
            {renderContactList.length>0 
            ? renderContactList: 
            "No Contacts available"}
            </div>
        </div>
    </div>
    );
};

export default ContactList;