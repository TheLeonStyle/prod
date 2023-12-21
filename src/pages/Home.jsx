import React, { useState } from 'react';
import Intro from '../components/Intro/Intro';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Form from '../components/Form/Form';
import Mission from '../components/Mission/Mission';
import Quote from '../components/Quote/Quote';
import Video from '../components/Video/Video';
import Team from '../components/Team/Team';
import Partners from '../components/Partners/Partners';
import Cooperation from '../components/Cooperation/Cooperation';
import Header from '../components/Header/Header';
import HeaderPopup from '../components/HeaderPopup/HeaderPopup';
import Footer from '../components/Footer/Footer';
import Submit from '../components/Submit/Submit';

const Home = ({ translation, burgerActive, setBurgerActive, handleLanguageChanges }) => {
  const [isVisibleSubmit, setIsVisibleSubmit] = useState(false);

  const toggleIsVisibleSubmit = (bool) => {
    setIsVisibleSubmit(bool);
  };

  return (
    <>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        navigationArray={translation?.index?.navigation || []}
        handleLanguageChanges={handleLanguageChanges}
      />
      {burgerActive && (
        <HeaderPopup
          burgerActive={burgerActive}
          setBurgerActive={setBurgerActive}
          navigationArray={translation?.index?.navigation || []}
          handleLanguageChanges={handleLanguageChanges}
        />
      )}
      {isVisibleSubmit && (
        <Submit
          translationObj={translation?.submit || []}
          toggleIsVisibleSubmit={toggleIsVisibleSubmit}
        />
      )}
      <Intro
        translationArray={translation?.index?.intro || []}
        toggleIsVisibleSubmit={toggleIsVisibleSubmit}
      />
      <About translationObj={translation?.index?.about || []} />
      <Services translationObj={translation?.index?.services || []} />
      <Form translationObj={translation?.index?.form || []} />
      <Mission translationObj={translation?.index?.mission || []} />
      <Quote translationObj={translation?.index?.quote || []} />
      <Video />
      <Team translationObj={translation?.index?.team || []} />
      <Partners translationObj={translation?.index?.partners || []} />
      <Cooperation translationObj={translation?.index?.cooperation || []} />
      <Footer translationObj={translation?.index?.footer || []} />
    </>
  );
};

export default Home;
