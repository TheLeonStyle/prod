import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';

import Home from './pages/Home';
import Events from './pages/Events';
import Music from './pages/Music';
import Photo from './pages/Photo';
import Marketing from './pages/Marketing';
import Policy from './pages/Policy/Policy';
import Briff from './pages/Briff';

function App() {
  const [burgerActive, setBurgerActive] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState('ru');
  const [translation, setTranslation] = useState(null);

  const headerNested = true;

  // Скрытие скролла body во время burger
  useEffect(() => {
    if (burgerActive) {
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [burgerActive]);

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
              headerNested={headerNested}
            />
          }
        />
        <Route
          path="/music_dance"
          element={
            <Music
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
            />
          }
        />
        <Route
          path="/photo_and_video"
          element={
            <Photo
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
            />
          }
        />
        <Route
          path="/marketing_and_brandin"
          element={
            <Marketing
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
            />
          }
        />
        <Route path="/policy" element={<Policy />} />
        <Route
          path="/briff"
          element={
            <Briff
              translation={translation}
              burgerActive={burgerActive}
              setBurgerActive={setBurgerActive}
              handleLanguageChanges={handleLanguageChanges}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
