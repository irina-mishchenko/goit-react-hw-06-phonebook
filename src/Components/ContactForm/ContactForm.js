import { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from "react-redux";
import actions from "./../../redux/actions";

import s from './ContactForm.module.css';

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'number':
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={s.formContainer}>
      <h2 className={s.formTitle}>Phonebook</h2>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.formLabel}>
          Name
          <input
            className={s.formInput}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label className={s.formLabel}>
          Number
          <input
            className={s.formInput}
            type="number"
            name="number"
            value={number}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" className={s.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
    onAddContact: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onAddContact: ({name, number}) => dispatch(actions.addContact(name, number))
});

export default connect(null, mapDispatchToProps)(ContactForm);