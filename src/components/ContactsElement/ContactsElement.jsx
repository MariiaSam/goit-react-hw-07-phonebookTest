import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contactsOperations';
import { selectIsDeleting } from '../../redux/selectors';


export const ContactsElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const [deleteButton, setDeleteButton] = useState('Delete');

  const handleDeleteBtn = id => {
    setDeleteButton('Deleting...');
    alert(`${name} Number removed from the contact list!`);
    dispatch(deleteContact(id)).then(() => {
      setDeleteButton('Delete');
    });
  };

  return (
    <>
      <li>
        {' '}
        {name}: {phone}
        <button
          type="button"
          disabled={isDeleting}
          onClick={handleDeleteBtn(id)}
        ></button>
      </li>
      {deleteButton}
    </>
  );
};
