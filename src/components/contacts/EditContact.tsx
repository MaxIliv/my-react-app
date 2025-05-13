import ContactForm from './ContactForm';
import type { Contact } from './Contacts';

type EditContactFormProps = {
  contact: Contact;
  onUpdate: (e: Contact) => void;
  onCancel: () => void;
}
function EditContactForm({ contact, onUpdate, onCancel }: EditContactFormProps) {

  function handleSubmit(payload: Contact) {
    onUpdate(payload);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <ContactForm initialState={contact} onSubmit={handleSubmit} />
      <button type="button" onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default EditContactForm;