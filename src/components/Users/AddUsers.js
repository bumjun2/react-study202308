import React, { useState } from 'react';
import styles from './addUsers.module.css';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
  const [userValue, setUserValue] = useState({
    username: '',
    age: '',
  });
  const usernameChangHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      username: e.target.value,
    }));
  };

  const ageChangeHandler = (e) => {
    setUserValue((prevUserValue) => ({
      ...prevUserValue,
      age: e.target.value,
    }));
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    // 입력값 검증
    if (userValue.username.trim() === '' || userValue.age.trim() === '') {
      return;
    }

    if (+userValue.age < 1) return;

    console.log(userValue);
    onAddUser(userValue);

    setUserValue({
      username: '',
      age: '',
    });
  };

  return (
    // React.Fragment
    <>
      <ErrorModal />
      <form
        className={styles.input}
        onSubmit={userSubmitHandler}
      >
        <label htmlFor="username">이름</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangHandler}
          value={userValue.username}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type="submit">가입하기</Button>
      </form>
    </>
  );
};

export default AddUsers;
