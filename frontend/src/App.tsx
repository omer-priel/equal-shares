import { useState } from 'react'

import { UserData, Page } from './types';

import RegisterPage from './components/RegisterPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import AboutPage from './components/AboutPage';
import { Button } from '@mui/material';

export default function App() {

  const [user, setUser] = useState<UserData | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>(Page.Login);
  const [aboutPageShowd, setAboutPageShowd] = useState<boolean>(false);

  const logout = () => {
    setUser(null);
    setCurrentPage(Page.Register);
  }

  const aboutLabel = aboutPageShowd ? 'חזור לדף' : 'עלינו';

  return (
    <div>
      <div className='h-[85dvh]'>
        <div className='w-fit mx-auto py-[10px]'>
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
        </div>
      </div>
      <div className='w-full h-[15dvh] p-[10px] border border-[#DEE2E6] border-t-1'>
        <div className='w-fit mx-auto'>
          <Button color='inherit' variant='text' onClick={() => {setAboutPageShowd(!aboutPageShowd)}}>
            {aboutLabel}
          </Button>
        </div>
        <div className='w-fit mx-auto'>
          © 2023 המעבדה לאלגוריתמים כלכליים
        </div>
      </div>
    </div>
  )
}
