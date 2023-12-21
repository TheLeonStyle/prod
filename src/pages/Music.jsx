import React from 'react';
import Header from '../components/Header/Header';
import HeaderPopup from '../components/HeaderPopup/HeaderPopup';
import Intro from '../components/ServicesPage/Intro/Intro';
import Services from '../components/ServicesPage/Services/Services';
import Advantages from '../components/ServicesPage/Advantages/Advantages';
import Team from '../components/Team/Team';
import Partners from '../components/Partners/Partners';
import About from '../components/ServicesPage/About/About';
import Footer from '../components/Footer/Footer';


const Music = ({ translation, burgerActive, setBurgerActive, handleLanguageChanges }) => {
  return (
    <>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        navigationArray={translation?.services?.navigation || []}
        handleLanguageChanges={handleLanguageChanges}
      />

      {burgerActive && (
        <HeaderPopup
          setBurgerActive={setBurgerActive}
          navigationArray={translation?.services?.navigation || []}
          handleLanguageChanges={handleLanguageChanges}
        />
      )}
      <Intro translationObj={translation?.music?.intro || []} />
      <About translationObj={translation?.music?.about || []} />
      <Services translationObj={translation?.music?.services || []} />
      <Advantages translationObj={translation?.music?.advantages || []} />
      <Team translationObj={translation?.index?.team || []} />
      <Partners translationObj={translation?.index?.partners || []} />
			<Footer translationObj={translation?.index?.footer || []} />
    </>
  );
};

export default Music;
