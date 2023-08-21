import React from 'react';

import Card from '../../UI/card';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
