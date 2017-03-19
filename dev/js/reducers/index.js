import {combineReducers} from 'redux';
import users from './reducer-users';
import books from './books';


const allReducers = combineReducers({
  users: users,
  books: books
});

export default allReducers;
