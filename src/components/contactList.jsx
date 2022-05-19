import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const { contacts, deleteContactHandler } = props;
  let renderContactList = [];
  if (contacts.length > 0) {
    renderContactList = contacts.map((contact) => (
      <ContactCard
        key={contact.id}
        contact={contact}
        deleteContactHandler={deleteContactHandler}
      />
    ));
  }

  return (
    <div className="container">
      <h2 className="mt-4 mb-4">
        Contact List
        <Link to="/add">
          <button className="btn btn-primary" style={{ float: "right" }}>
            Add contact
          </button>
        </Link>
      </h2>

      {renderContactList}
    </div>
  );
};

export default ContactList;
