import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../img/user.jpg";

const ContactDetails = (props) => {
  const { name, email } = useLocation().state.contact;
  return (
    <div className="container">
      <h2 className="mt-5 mb-3 text-center">Contact Details</h2>
      <div className="card" style={{ width: "25rem", margin: "0 auto" }}>
        <img src={user} alt="user" className="card-img-top" />
        <div className="card-body">
          <div className="card-title">{name}</div>
          <div className="card-text">{email}</div>
        </div>
      </div>

      <Link to="/">
        <div className="text-center mt-3">
          <button className="btn btn-primary" style={{ margin: "0 auto" }}>
            Back to Contact List
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ContactDetails;
