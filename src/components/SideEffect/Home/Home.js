import React, { useContext } from 'react';

import Card from '../../UI/card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <Card className={styles.home}>
            <h1>Welcome back!</h1>
            <Button onClick={context.onLogout}>Logout</Button>
          </Card>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Home;
