import { useSelector } from 'react-redux';
import { selectActiveContacts } from '../../redux/selectors';
import { ContactsElement } from 'components/ContactsElement/ContactsElement';


export const ContactList = () => {
  const visibleContacts = useSelector(selectActiveContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactsElement key={id} name={name} phone={phone} id={id} />
      ))}
    </ul>
  );
};