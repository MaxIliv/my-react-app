import type { Contact } from './Contacts';
type ContactDetailsProps = {
  contact: Contact;
}

function ContactDetails({ contact }: ContactDetailsProps) {

  return (
    <div>
      <p>First Name: { contact.firstName}</p>
      <p>Last Name: { contact.lastName}</p>
      <p>Birthday: { contact.birthday}</p>
      <p>Tel: { contact.tel}</p>
    </div>
  )
}

export default ContactDetails;
