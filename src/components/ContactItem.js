// components/ContactItem.js

import React, { useState } from 'react';

const ContactItem = ({ contact, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const handleDelete = () => {
    onDelete(contact.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(editedContact);
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={editedContact.email}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ContactItem;
