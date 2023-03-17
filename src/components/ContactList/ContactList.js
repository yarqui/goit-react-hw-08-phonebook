import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';

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
        <li key={id}>
          {name}: {number}
          <button
            id={id}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
            disabled={isLoading}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default ContactList;
