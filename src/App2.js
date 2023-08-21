import React, { useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const App2 = () => {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (user) => {
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };
  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App2;
