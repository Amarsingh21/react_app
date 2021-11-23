import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route,Switch, Routes} from "react-router-dom";
import { uuid } from "uuidv4";
import api from '../api/contacts';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
function App() {
  const LoCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const[searchTerm, setSearchTerm] = useState("");
  const [searchReasults, setSearchResults] = useState([]);
  //Retrieve Constants
  const retrieveContacts= async () => {
    const response = await api.get("/contacts");
    return response.data;
  }
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contacts", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put ('/contacts/${contact.id}', contact)
    const {id, name, email} = response.data;
    setContacts(
      contact.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
const removeContactHandler = async(id) => {
  // await api.delete('/contacts/${id}');
  const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
  });

    setContacts(newContactList);
  };

  const searchHandler = () => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter ((contact) => {
        return Object.values(contact)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    }else{
      setSearchResults(contacts);
    }
  };
  useEffect (() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LoCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);

    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);
  
useEffect(() =>{
  // localStorage.setItem(LoCAL_STORAGE_KEY,JSON.stringify(contacts));
}, [contacts]);

  return (
    <div className="ui container">
      <Router>
          <Header/>
          <Switch>
            <Route path ="/" exact
              render={(props) => (
                <ContactList
                  {...props}
                  contacts={searchTerm.length < 1 ? contacts : searchReasults}
                  getContactId={removeContactHandler}
                  term = {searchTerm}
                  searchKeyword = {searchHandler}
                />
              )}
              />
            <Route path ="/add"
                    render={(props) => (
                      <AddContact {...props} addContactHandler={addContactHandler} />
                    )}
                  />
            <Route path ="/edit"
                    render={(props) => (
                      <EditContact {...props} updateContactHandler={updateContactHandler} />
                    )}
                  />
            <Route path="/contact/:id" exact component={ContactDetail} />
            <Route path ="/con"><ContactDetail/></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
