import type { Contact } from './Contacts';
type ContactDetailsProps = {
  contact: Contact;
  onEdit: () => void;
}

function ContactDetails({ contact, onEdit }: ContactDetailsProps) {

  return (
    <div>
      <p>First Name: { contact.firstName}</p>
      <p>Last Name: { contact.lastName}</p>
      <p>Birthday: { contact.birthday}</p>
      <p>Tel: { contact.tel}</p>
      <button onClick={onEdit}>Edit</button>
    </div>
  )
}

export default ContactDetails;
