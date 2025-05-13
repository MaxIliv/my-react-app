import type { Contact } from './Contacts';

type ContactListProps = {
  contacts: Contact[];
  onSelect: (e: Contact) => void;
}

function ContactsList({ contacts, onSelect }: ContactListProps) {

  return (
    contacts.map((contact) => <p key={contact.id} onClick={() => onSelect(contact)}>{contact.firstName}</p>)
  )
}

export default ContactsList;