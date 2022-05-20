import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = {
      id,
      name,
      email,
    };
  }

  UpdateContact = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all the feilds are mendatory");
      return;
    } else {
      this.props.updateContactHandler(this.state);
      this.setState({ name: "", email: "" });
      // window.location = "/";
      this.props.Navigate("/");
    }
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ fontWeight: "600", marginTop: "2rem" }}>Edit Contact</h2>
        <form onSubmit={this.UpdateContact}>
          <div className="mt-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default (props) => (
  <EditContact {...props} location={useLocation()} Navigate={useNavigate()} />
);
