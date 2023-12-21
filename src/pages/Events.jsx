import React from 'react';
import Header from '../components/Header/Header';
import HeaderPopup from '../components/HeaderPopup/HeaderPopup';
import Intro from '../components/ServicesPage/Intro/Intro';
import Services from '../components/ServicesPage/Services/Services';
import Advantages from '../components/ServicesPage/Advantages/Advantages';
import Team from '../components/Team/Team';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';

const Events = ({
  translation,
  burgerActive,
  setBurgerActive,
  handleLanguageChanges,
  headerNested,
}) => {
  return (
    <>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        navigationArray={translation?.services?.navigation || []}
        handleLanguageChanges={handleLanguageChanges}
        headerNested={headerNested}
      />

      {burgerActive && (
        <HeaderPopup
          setBurgerActive={setBurgerActive}
          navigationArray={translation?.services?.navigation || []}
          handleLanguageChanges={handleLanguageChanges}
        />
      )}
      <Intro translationObj={translation?.events?.intro || []} />
      <Services translationObj={translation?.events?.services || []} />
      <Advantages translationObj={translation?.events?.advantages || []} />
      <Team translationObj={translation?.index?.team || []} />
      <Partners translationObj={translation?.index?.partners || []} />
      <Footer translationObj={translation?.index?.footer || []} />
    </>
  );
};

export default Events;
