import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./header";
import AddContact from "./addContact";
import ContactList from "./contactList";
import ContactDetails from "./contactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    contact.id = uuid();
    setContacts([...contacts, contact]);
  };

  const deleteContactHandler = (contactId) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    setContacts(newContacts);
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
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
            path="/"
            exact
            element={
              <ContactList
                contacts={contacts}
                deleteContactHandler={deleteContactHandler}
              />
            }
          ></Route>
           <Route path="/contact/:id" element={<ContactDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
