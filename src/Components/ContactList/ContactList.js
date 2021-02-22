import propTypes from 'prop-types';
import { connect } from "react-redux";
import actions from "./../../redux/actions";

import ContactListItem from './ContactListItem/ContactListItem';

import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ name, id, number }) => {
        return (
          <ContactListItem
            contact={name}
            number={number}
            key={id}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.shape).isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({name}) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({contacts: {items, filter}}) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(actions.deleteContact(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);