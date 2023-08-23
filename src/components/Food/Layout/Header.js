import React from 'react';
import styles from './Header.module.scss';
import measleImage from '../../../assets/meais.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  const { header, 'main-image': mainImage } = styles;
  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={mainImage}>
        <img
          src={measleImage}
          alt="Looks very delicious meals"
        />
      </div>
    </>
  );
};

export default Header;
