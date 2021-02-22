import {combineReducers} from 'redux';
import { createReducer } from "@reduxjs/toolkit";
import actions from "./actions";

const items = createReducer([], {
    [actions.addContact]: (state, {payload}) => [payload, ...state],
    [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
});

export default combineReducers({
    items,
    filter,
});