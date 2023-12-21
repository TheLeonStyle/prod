import React, { useState } from 'react';
import Header from '../components/Header/Header';
import HeaderPopup from '../components/HeaderPopup/HeaderPopup';
import Intro from '../components/ServicesPage/Intro/Intro';
import BriffForm from '../components/BriffForm/BriffForm';
import Footer from '../components/Footer/Footer';

const Briff = ({ translation, burgerActive, setBurgerActive, handleLanguageChanges }) => {
  return (
    <>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        navigationArray={translation?.briff?.navigation || []}
        handleLanguageChanges={handleLanguageChanges}
      />

      {burgerActive && (
        <HeaderPopup
          setBurgerActive={setBurgerActive}
          navigationArray={translation?.briff?.navigation || []}
          handleLanguageChanges={handleLanguageChanges}
        />
      )}
      <Intro translationObj={translation?.briff?.intro || []} />

      <BriffForm translationObj={translation?.briff?.form || []} />

      <Footer translationObj={translation?.index?.footer || []} />
    </>
  );
};

export default Briff;
