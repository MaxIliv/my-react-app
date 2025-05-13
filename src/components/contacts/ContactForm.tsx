import { CSSProperties, FC } from 'react';
import { Contact } from './Contacts';

type ContactFormProps =  {
  initialState?: Contact;
  submitText?: string;
  onSubmit: (e: Contact) => void;
}
const ContactForm: FC<ContactFormProps> = ({ initialState, submitText = 'Submit', onSubmit }) => {
  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const payload = {
      ...initialState,
      ...Object.fromEntries(formData) as Contact,
    }

    onSubmit(payload);
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '4px'}} onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName" defaultValue={initialState?.firstName} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" defaultValue={initialState?.lastName} />
      <label htmlFor="birthday">Birthday</label>
      <input type="date" name="birthday" id="birthday" defaultValue={initialState?.birthday} />
      <label htmlFor="tel">Tel</label>
      <input type="tel" name="tel" id="tel" defaultValue={initialState?.tel} />
      <button type="submit">{ submitText }</button>
    </form>
  )
}

export default ContactForm;
