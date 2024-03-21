import { useState } from 'react'

import { UserData, Page } from './types';

import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

export default function App() {

  const [user, setUser] = useState<UserData | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Login);
  const [aboutPageShowd, setAboutPageShowd] = useState<boolean>(false);

  const logout = () => {
    setUser(null);
    setCurrentPage(Page.Register);
  }

  return (
    <div>
      {aboutPageShowd ? <AboutPage /> : (<>
        {user === null ? (
        <>
          {currentPage === Page.Register && (<RegisterPage setCurrentPage={setCurrentPage} />)}
          {currentPage === Page.ForgotPassword && (<ForgotPasswordPage setCurrentPage={setCurrentPage} />)}
          {currentPage === Page.Login && (<LoginPage setCurrentPage={setCurrentPage} setUser={setUser} />)}
        </>) : (<>
          {currentPage === Page.Main && (<MainPage logout={logout} user={user} />)}
        </>)}
      </>)}
      <Footer aboutPageShowd={aboutPageShowd} setAboutPageShowd={setAboutPageShowd} />
    </div>
  )
}
