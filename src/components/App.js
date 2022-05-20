import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import api from "../api/contacts";
import "./App.css";
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";
import ContactDetails from "./contactDetails";
import EditContact from "./editContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResult] = useState([]);

  // retriveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const deleteContactHandler = async (contactId) => {
    await api.delete(`/contacts/${contactId}`);
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(newContacts);
  };
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContacts = contacts.filter((contact) => {
        return Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContacts);
    } else {
      setSearchResult(contacts);
    }
  };

  useEffect(() => {
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) {
    //   setContacts(retrieveContacts);
    // }
    const getAllContact = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContact();
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          ></Route>

          <Route
            path="/edit/:id"
            element={
              <EditContact updateContactHandler={updateContactHandler} />
            }
          ></Route>
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchTerm.length<1 ? contacts : searchResults}
                deleteContactHandler={deleteContactHandler}
                term={searchTerm}
                searchKeyWorld={searchHandler}
              />
            }
          ></Route>
          <Route path="/contact/:id" element={<ContactDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
