import { Page, UserData } from "../types";

export type Props = {
    setCurrentPage: (page: Page) => void;
    setUser: (user: UserData) => void;
};

export default function LoginPage({ setCurrentPage, setUser }: Props) {
    const loginOnClick = () => {
        setUser({
            token: 'token',
            email: 'example@test.com',
            password: 'password',
            voted: false,
        });
        setCurrentPage(Page.Main);
    }

    return (
        <div>
            <h1>Login</h1>
            <button onClick={() => setCurrentPage(Page.Register)}>Register</button>
            <button onClick={() => setCurrentPage(Page.ForgotPassword)}>Forgot Password</button>
            <button onClick={loginOnClick}>Login</button>
        </div>
    );
}