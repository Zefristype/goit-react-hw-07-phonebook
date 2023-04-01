import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { Contacts } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ThreeDots } from 'react-loader-spinner';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="7"
          color="#292828"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
      {error && <p>{error}</p>}
      {visibleContacts.length === 0 && !isLoading && <p>Phonebook is empty</p>}

      <Contacts>
        {visibleContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </Contacts>
    </>
  );
};
