import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selector';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        name="filter"
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
