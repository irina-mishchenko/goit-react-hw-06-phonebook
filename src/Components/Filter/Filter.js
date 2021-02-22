import propTypes from 'prop-types';
import { connect } from "react-redux";
import actions from "./../../redux/actions";

import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={s.filterContainer}>
      <label className={s.filterLabel}>
        Find contact
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);