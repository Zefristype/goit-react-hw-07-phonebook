import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux/es/exports';
import { deleteContact } from 'redux/operations';
import { Item, Button } from './ContactList.styled';
export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <Item>
        <p>
          {name}: {phone}
        </p>
        <Button type="button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
      </Item>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
