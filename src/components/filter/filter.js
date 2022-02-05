import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/actions';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      name="filter"
      onChange={onChange}
    />
  </label>
);

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Filter);
