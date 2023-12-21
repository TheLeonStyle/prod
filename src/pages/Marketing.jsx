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


const Marketing = ({ translation, burgerActive, setBurgerActive, handleLanguageChanges }) => {
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
      <Intro translationObj={translation?.marketing?.intro || []} />
      <About translationObj={translation?.marketing?.about || []} />
      <Services translationObj={translation?.marketing?.services || []} />
      <Advantages translationObj={translation?.marketing?.advantages || []} />
      <Team translationObj={translation?.index?.team || []} />
      <Partners translationObj={translation?.index?.partners || []} />
			<Footer translationObj={translation?.index?.footer || []} />
    </>
  );
};

export default Marketing;
