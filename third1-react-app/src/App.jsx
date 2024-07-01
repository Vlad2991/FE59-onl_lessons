
import React, { useState } from 'react';
import './styles/styles.scss'; 
import Header from './components/Header/Header';
import BlogPosts from './components/BlogPosts/BlogPosts';
import SignIn from './components/SignIn/SignIn';
import Success from './components/Success/Success';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Registration from './components/Registration/Registration';
import Modal from './components/Modal/Modal';

import { MyContext } from './hooks/context.hook';

const App = () => {
  const [page, setPage] = useState('home');
  const [isBlackTheme, setIsBlackTheme] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleChangeTheme = () => setIsBlackTheme(!isBlackTheme);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCard(null); 
    setIsModalOpen(false);
  };

  return (
    <MyContext.Provider value={{ isBlackTheme }}>
      <Header
        setPage={setPage}
        isBlackTheme={isBlackTheme}
        handleChangeTheme={handleChangeTheme}
      />
      <main className={isBlackTheme ? 'black-theme' : ''}>
        {page === 'blog' && (
          <>
            <BlogPosts isBlackTheme={isBlackTheme} openModal={openModal} />
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              card={selectedCard}
            />
          </>
        )}
        {page === 'home' && <Home />}
        {page === 'signIn' && <SignIn setPage={setPage} isBlackTheme={isBlackTheme} />}
        {page === 'success' && <Success setPage={setPage} isBlackTheme={isBlackTheme} />}
        {page === 'signUp' && <SignUp setPage={setPage} isBlackTheme={isBlackTheme} />}
        {page === 'registration' && <Registration setPage={setPage} isBlackTheme={isBlackTheme} />}
      </main>
    </MyContext.Provider>
  );
};

export default App;
