import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js"; // Importujemy funkcje z modułu contacts.js
import { Command } from "commander";
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: refaktor
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = addContact(name, email, phone);
      console.log("Added contact:", newContact);
      break;

    case "remove":
      const isRemoved = removeContact(id);
      if (isRemoved) {
        console.log("Contact removed successfully.");
      } else {
        console.log("Contact not found.");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
