import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import HeaderPopup from './components/HeaderPopup/HeaderPopup';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Services from './components/Services/Services';
import Form from './components/Form/Form';
import Mission from './components/Mission/Mission';
import Quote from './components/Quote/Quote';
import Video from './components/Video/Video';
import Team from './components/Team/Team';
import Partners from './components/Partners/Partners';
import Cooperation from './components/Cooperation/Cooperation';

function App() {
  const [burgerActive, setBurgerActive] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [translation, setTranslation] = useState(null);

  useEffect(() => {
    // Получить выбранный язык из localstorage
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }

    // Получить выбранный из json файла
    const fetchTranslation = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/translation/${selectedLanguage}.json`,
        );
        const translationData = await response.json();

        setTranslation(translationData);
      } catch (error) {
        console.error('Ошибка при получений языка:', error);
      }
    };
    fetchTranslation();
  }, [selectedLanguage]);

  const handleLanguageChanges = (lang) => {
    setSelectedLanguage(lang);
    // Сохранить выбранный язык в localstorage
    localStorage.setItem('selectedLanguage', lang);
  };

  return (
    <div className={styles.app}>
      <Header
        burgerActive={burgerActive}
        setBurgerActive={setBurgerActive}
        navigationArray={translation?.index?.navigation || []}
        handleLanguageChanges={handleLanguageChanges}
      />

      {burgerActive && (
        <HeaderPopup
          burgerActive={burgerActive}
          navigationArray={translation?.index?.navigation || []}
          handleLanguageChanges={handleLanguageChanges}
        />
      )}

      <main className={styles.app__main}>
        {/* <Intro translationArray={translation?.index?.intro || []} />
        <About translationObj={translation?.index?.about || []} />
        <Services translationObj={translation?.index?.services || []} /> */}
        <Form />
        <Mission />
        <Quote />
        <Video />
        <Team />
        <Partners />
        <Cooperation />
      </main>

      <Footer />
    </div>
  );
}

export default App;
