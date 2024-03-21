import { Page } from "../types";

export type Props = {
    setCurrentPage: (page: Page) => void;
};

export default function ForgotPasswordPage({ setCurrentPage }: Props) {
    return (
        <div>
            <h1>Forgot Password</h1>
            <button onClick={() => setCurrentPage(Page.Login)}>Login</button>
        </div>
    );
}