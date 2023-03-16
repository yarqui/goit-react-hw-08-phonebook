import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { DeleteButton, ContactItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const showLoading = isLoading && !error;
  const showError = error && !isLoading;

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {showLoading && <p>Loading...</p>}
      {showError && <p>{error.message}</p>}

      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <DeleteButton
            id={id}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
            disabled={isLoading}
          >
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </>
  );
};

export default ContactList;
