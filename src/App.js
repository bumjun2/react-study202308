import React from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
