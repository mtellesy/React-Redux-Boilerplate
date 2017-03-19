import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


class UserList extends Component {

createListItems () {
   return this.props.users.map((user) => {
     return(
       <li
       key={user.id}
       onClick={() => {this.props.selectUser(user)}}
        >
        {user.first} {user.last} </li>
     );
   });
}

createBookList(){
  return this.props.books.map((book) => {
    return (
      <li key={book.id}> {book.name} </li>
    );
  });
}

render()
{
  return(
    <ul>
    {this.createListItems()}
    {this.createBookList()}
    </ul>
  );
}

}

// this function will take the part of the store we want and map them  to the props of the component
function mapStateToProps(state){
  return {
    users: state.users,
    books: state.books
  };
}

//this is where we connect ations with components
//create a props called selectUser to be equile to the action selectUser
function matchDispatachToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch);
}
// now we connect them with the component
export default connect(mapStateToProps,matchDispatachToProps)(UserList);
