import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ContactList = (props) => {
  const { contacts, deleteContactHandler } = props;
  const inputEl = useRef("");

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
  const getSearchTerm = () => {
    props.searchKeyWorld(inputEl.current.value);
  };
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
      <div className="input-container" style={{ position: "relative" }}>
        <input
          ref={inputEl}
          type="text"
          placeholder="Search contact"
          className="form-control"
          value={props.term}
          onChange={getSearchTerm}
        />
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            position: "absolute",
            right: "1rem",
            top: "0.8em",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="mt-2">
        {renderContactList.length > 0
          ? renderContactList
          : "No contact available"}
      </div>
    </div>
  );
};

export default ContactList;
