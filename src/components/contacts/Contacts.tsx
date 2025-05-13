import { useMemo, useState } from 'react';
import ContactsList from './ContactsList';
import ContactDetails from './ContactDetails';
import EditContactForm from './EditContact';
import ContactForm from './ContactForm';
import SearchInput from './SearchInput';

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  birthday: string;
  tel: string;
}

type AppState = 'DEFAULT' | 'CONTACT_CREATE' | 'CONTACT_PREVIEW' | 'CONTACT_EDIT';

function Contacts() {
  console.log('Contacts render');

  const [appState, setAppState] = useState<AppState>('DEFAULT');
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      lastName: 'John',
      firstName: 'John',
      birthday: '2025-05-14',
      tel: '123',
    },
    {
      id: '2',
      lastName: 'Larry',
      firstName: 'Larry',
      birthday: '2025-05-14',
      tel: '123',
    }
  ]);

  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  
  const isCreateNewContactState = appState === 'CONTACT_CREATE';
  const isContactPreview = appState === 'CONTACT_PREVIEW';
  const isContactEdit = appState === 'CONTACT_EDIT';

  const filteredContacts = contacts.filter((contact) => contact.firstName.toLowerCase().match(search.toLowerCase()));
  const isEmptyContacts = filteredContacts.length === 0;

  const contactsById = useMemo(() => new Map(contacts.map(c => [c.id, c])), [contacts]);
  const selectedContact = selectedContactId ? contactsById.get(selectedContactId) : null;

  const handleNewContactState = () => {
    setAppState('CONTACT_CREATE');
    setSelectedContactId(null);
  }

  const handleContactSelect = (contact: Contact) => {
    setSelectedContactId(contact.id);
    setAppState('CONTACT_PREVIEW');
  }

  const handleNewContact = (e: Contact) => {
    const newContact: Contact = {
      ...e,
      id: Date.now().toString(),
    }

    setContacts([...contacts, newContact]);
    setSelectedContactId(newContact.id);
    setAppState('CONTACT_PREVIEW');
  }

  const handleContactEdit = () => {
    setAppState('CONTACT_EDIT');
  }
  const handleContactEditCancel = () => {
    setAppState('CONTACT_PREVIEW');
  }

  const handleContactUpdate = (data: Contact) => {
    // FIXME: contact order
    setContacts(contacts.map((c) => {
      if (c.id === data.id) return data;
      return c;
    }));

    setAppState('CONTACT_PREVIEW');
  }

  return (
    <>
      <h1>Contacts List</h1>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '0 0 300px' }}>
          <SearchInput value={search} onSearch={setSearch} />
          <button onClick={handleNewContactState}>Add new</button>
          <ContactsList contacts={filteredContacts} onSelect={handleContactSelect} />
          {isEmptyContacts && <p>No results</p>}
        </div>

        {isCreateNewContactState &&
          <div>
            New Contact
            <ContactForm onSubmit={handleNewContact} />
          </div>
        }

        {
          isContactPreview && selectedContact &&
          <ContactDetails contact={selectedContact} onEdit={handleContactEdit} />
        }
        {
          isContactEdit && selectedContact && 
          <EditContactForm contact={selectedContact} onUpdate={handleContactUpdate} onCancel={handleContactEditCancel} />
        }
      </div>
    </>
  );
}

export default Contacts;