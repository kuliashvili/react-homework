// components/ContactsList.js

import React from 'react';
import ContactItem from './ContactItem';

const ContactsList = ({ contacts, onDelete, onEdit }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default ContactsList;
