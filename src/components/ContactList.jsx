import React from "react";

export default function ContactList({ contacts }) {
  return (
    <div className="cardsContaner">
      {contacts.map((contact) => (
        <div className="card" key={contact.phonenumber}>
          <img src="../images/user.jpg" alt="Avatar"></img>
          <div class="container">
            <h4 className="card-name">{contact.name}</h4>
            <p>{contact.email}</p>
            <p>{contact.phonenumber}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
