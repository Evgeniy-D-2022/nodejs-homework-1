import yargs from "yargs";

import * as contactsService from "./contacts.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contactsList = await contactsService.listContacts();
      return console.table(contactsList);

    case 'get':
      const getContact = await contactsService.getContactById(id);
      return console.log(getContact);

    case 'add':
      const newContact = await contactsService.addContact({ name, email, phone });
      return console.log(newContact);

    case 'remove':
        const delContact = await contactsService.removeContact(id);
        return console.log(delContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

// invokeAction({action: 'list'})
// invokeAction({action: "get", id: "AeHIrLTr6JkxGE6SN-0Rw"})
// invokeAction({action: "add", name: "Chaim Lewis", email: "dui.in@egetlacus.ca", phone: "(294) 840-6685"})

const {argv} = yargs(process.argv.slice(2));
invokeAction(argv);