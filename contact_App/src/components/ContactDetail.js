import React from "react";
import { Link } from "react-router-dom";
import user from '../images/man2.png';
const ContactDetail = (props) => {
    // const { name, email } = props.location.state.contact;
    return (
        <div className="main">
            <div className="ui card centerd">
                <h1>Hello</h1>
                <div className="image">
                    <img src= {user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">Amar</div>
                    <div className="description">amar@gmail.com</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="ui button blue center">Back to Contact List</button>
                </Link>
            </div>
        </div>
    );
};

export default ContactDetail;