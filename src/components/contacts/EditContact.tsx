import type { Contact } from './Contacts';

type EditContactFormProps = {
  contact: Contact;
  onUpdate: (e: Contact) => void;
  onCancel: () => void;
}
function EditContactForm({ contact, onUpdate, onCancel }: EditContactFormProps) {

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = {
      ...contact,
      ...Object.fromEntries(formData) as Contact,
    }

    onUpdate(payload);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" defaultValue={contact.firstName} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" defaultValue={contact.lastName} />
      <label htmlFor="birthday">Birthday</label>
      <input type="date" name="birthday" id="birthday" defaultValue={contact.birthday} />
      <label htmlFor="tel">Tel</label>
      <input type="tel" name="tel" id="tel" defaultValue={contact.tel} />
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  )
}

export default EditContactForm;