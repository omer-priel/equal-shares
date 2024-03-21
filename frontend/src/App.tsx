import { useState } from 'react'

import { UserData, Page } from './types';

import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

import './App.css'


export default function App() {

  const [user, setUser] = useState<UserData | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Register);

  const logout = () => {
    setUser(null);
    setCurrentPage(Page.Register);
  }

  return (
    <div>
      {user === null ? (
      <>
        {currentPage === Page.Register && (<RegisterPage setCurrentPage={setCurrentPage} />)}
        {currentPage === Page.ForgotPassword && (<ForgotPasswordPage setCurrentPage={setCurrentPage} />)}
        {currentPage === Page.Login && (<LoginPage setCurrentPage={setCurrentPage} setUser={setUser} />)}
      </>) : (<>
        {currentPage === Page.Main && (<MainPage logout={logout} user={user} />)}
      </>)}
    </div>
  )
}
