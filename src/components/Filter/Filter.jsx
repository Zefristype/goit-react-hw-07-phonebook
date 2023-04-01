import { useDispatch, useSelector } from 'react-redux/es/exports';
import { onChange } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(onChange(value.toLowerCase()));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

