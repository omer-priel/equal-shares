import { useState } from "react";

import { Page, UserData } from "../types";

import logoImage from '../assets/logo.png';

export type Props = {
    setCurrentPage: (page: Page) => void;
    setUser: (user: UserData) => void;
};

export default function LoginPage({ setCurrentPage, setUser }: Props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    const loginOnClick = () => {
        setMessage('Login failed');

        setUser({
            token: 'token',
            email: 'example@test.com',
            password: 'password',
            voted: false,
        });
        setCurrentPage(Page.Main);
    }

    return (
        <div className="login">
            <div className="container w-100 m-auto">
                <div>
                    <img className="login-logo mb-4" src={logoImage} width="75" height="65" />
                    <h1 className="h3 mb-3 font-normal text-center">התחברו ודרגו!</h1>

                    {message && <span>
                        <div className="alert alert-danger d-flex align-items-center" role="alert">
                            {message}
                        </div>
                    </span>}
                    <label className='form-label d-flex text-right mb-1'>אימייל</label>
                    <input
                        type="email"
                        className="form-control direction-ltr"
                        placeholder="name@example.ariel.ac.il"
                        value={username}
                        onChange={evt => setUsername(evt.target.value)}
                    />
                    <label className='form-label d-flex text-right mt-2 mb-1'>סיסמא</label>
                    <input
                        type="password"
                        className="form-control direction-ltr"
                        placeholder="Password"
                        value={password}
                        onChange={evt => setPassword(evt.target.value)}
                    />

                    <button className="btn btn-primary w-100 py-2" onClick={loginOnClick}>התחברות</button>
                    <div className="text-center text-muted mt-5 mb-0">שכחת את הסיסמא?
                        <button className="fw-bold text-body" onClick={() => setCurrentPage(Page.ForgotPassword)}>
                            <u>איפוס הסיסמא</u>
                        </button>
                    </div>
                </div>
                <p className="text-center text-muted mt-5 mb-0">עדיין לא נרשמת?
                    <button className="fw-bold text-body" onClick={() => setCurrentPage(Page.Register)}>
                        <u>הרשמה כאן!</u>
                    </button>
                </p>
            </div>
        </div>
    );
}