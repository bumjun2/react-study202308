// rafce
import React from 'react';

const Hello = (props) => {
  console.log('Hello Component!');
  console.log(props);
  return (
    <div>
      {props.children}
      Hello
    </div>
  );
};

export default Hello;
