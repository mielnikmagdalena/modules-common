const fs = require("fs");
const path = require("path");

// Ścieżka do pliku contacts.json
const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
  // Odczytaj dane z pliku contacts.json
  try {
    const data = fs.readFileSync(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    return [];
  }
}

function getContactById(contactId) {
  const contacts = listContacts();
  const contact = contacts.find((c) => c.id === contactId);
  return contact;
}

function removeContact(contactId) {
  const contacts = listContacts();
  const updatedContacts = contacts.filter((c) => c.id !== contactId);
  saveContacts(updatedContacts);
  return contacts.length !== updatedContacts.length;
}

function addContact(name, email, phone) {
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

function saveContacts(contacts) {
  const data = JSON.stringify(contacts, null, 2);
  fs.writeFileSync(contactsPath, data);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
