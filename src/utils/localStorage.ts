import { Contact } from '../components/contacts/Contacts';

const KEY = 'CONTACTS_LIST';
export const saveContacts = (contacts: Contact[]) => {
  const data = JSON.stringify(contacts);
  return localStorage.setItem(KEY, data);
}

export const getContacts = (): Contact[] => {
  const items = localStorage.getItem(KEY);
  if (items) return JSON.parse(items);
  return [];
}
