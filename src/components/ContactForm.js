// components/ContactForm.js

import React, { useState } from 'react';

const ContactForm = ({ onAdd }) => {
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    onAdd({ ...newContact, id: Date.now() });
    setNewContact({ name: '', email: '' });
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newContact.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={newContact.email}
        onChange={handleInputChange}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default ContactForm;
