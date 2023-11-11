// App.js

import React, { useState } from 'react';
import ContactsList from './components/ContactsList';
import ContactForm from './components/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'vaja@random.com' },
    // daamate meti contact if needed
  ]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  };

  const editContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id ? editedContact : contact
    );
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact App</h1>
      <ContactsList contacts={contacts} onDelete={deleteContact} onEdit={editContact} />
      <ContactForm onAdd={addContact} />
    </div>
  );
};

export default App;
