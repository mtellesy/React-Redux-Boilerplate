import React from 'react';
import UserList from '../containers/user-list';
require('../../scss/style.scss');

const App = () => (
 <div>
    <h2> Names List: </h2>
    <UserList />
    <hr/>
    <h2> Details: </h2>

 </div>
);

export default App;
