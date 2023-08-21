import React from 'react';
import styles from './UserLIst.module.css';

const UserList = ({ users }) => {
  return (
    <ul className={styles.users}>
      {users.map((user) => {
        <li key={user.id}>
          {user.username} ({user.age}세)
        </li>;
      })}
    </ul>
  );
};

export default UserList;
