import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

class AddContact extends Component {
  state = { name: "", email: "" };

  AddContact = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("all the feilds are mendatory");
      return;
    } else {
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
      window.location = "/";
    }
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ fontWeight: "600", marginTop: "2rem" }}>Add Contact</h2>
        <form onSubmit={this.AddContact}>
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
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
