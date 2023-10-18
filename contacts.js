//const fs = require("fs");
//const path = require("path");
import fs from "fs";
import path from "path";
// Ścieżka do pliku contacts.json
const contactsPath = path.join(process.cwd(), "db", "contacts.json");

export function listContacts() {
  // Odczytaj dane z pliku contacts.json
  try {
    const data = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    return [];
  }
}

export function getContactById(contactId) {
  const contacts = listContacts();
  const contact = contacts.find((c) => c.id === contactId);
  return contact;
}

export function removeContact(contactId) {
  const contacts = listContacts();
  const updatedContacts = contacts.filter((c) => c.id !== contactId);
  saveContacts(updatedContacts);
  return contacts.length !== updatedContacts.length;
}

export function addContact(name, email, phone) {
  const contacts = listContacts();
  const newContact = {
    id: Date.now(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  saveContacts(contacts);
  return newContact;
}

export function saveContacts(contacts) {
  const data = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(contactsPath, data);
}
