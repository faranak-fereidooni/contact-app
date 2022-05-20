import React from "react";
import { Link } from "react-router-dom";
import user from "../img/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div
      className="container mb-2"
      style={{ borderBottom: "1px solid #eee", padding: "10px" }}
    >
      <div style={{ display: "flex" }}>
        <div className="img">
          <img
            src={user}
            alt="user"
            style={{ width: "70px", height: "70px" }}
          />
        </div>
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div
            className="content"
            style={{ marginLeft: "2rem", marginTop: "0.5rem" }}
          >
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </Link>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{
          fontSize: "20px",
          float: "right",
          color: "red",
          marginTop: "-2rem",
          cursor: "pointer",
        }}
        onClick={() => props.deleteContactHandler(id)}
      />

      <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
        <FontAwesomeIcon
          icon={faEdit}
          style={{
            fontSize: "20px",
            float: "right",
            color: "blue",
            marginTop: "-2rem",
            marginRight: "2rem",
            cursor: "pointer",
          }}
        />
      </Link>
    </div>
  );
};

export default ContactCard;
