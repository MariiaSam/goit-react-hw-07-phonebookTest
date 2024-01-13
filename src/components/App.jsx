import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../redux/selectors';
import { useEffect } from 'react';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
// import { ContactsTitle } from './ContactsTitle/ContactsTitle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Error } from './Error/Error';
import { Loader } from './Loader/Loader';
import { selectActiveContacts } from '../redux/selectors';
import { selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/contactsOperations';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const activeContacts = useSelector(selectActiveContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    // <div>
    //   <Section title="Phonebook">
    //     <ContactForm />
    //     {contacts.length > 0 && (
    //       <>
    //         <ContactsTitle title="Contacts" />
    //       </>
    //     )}
    //     <Filter />
    //     <ContactList />
    //   </Section>
    // </div>

<div>
<Section title={'Phonebook'}>
  <ContactForm />
  <Filter />
  {contacts.length > 0 && activeContacts.length === 0 && (
    <Error message={'nothing was found at this number'} />
  )}
  {contacts.length === 0 && !isLoading && (
    <Error message={'there are no contacts in your phone'} />
  )}
  {isLoading && <Loader />}
  {contacts.length > 0 && <ContactList />}
</Section>
</div>
  );
};
