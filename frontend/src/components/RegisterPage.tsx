import { Page } from "../types";

export type Props = {
    setCurrentPage: (page: Page) => void;
};

export default function RegisterPage({ setCurrentPage }: Props) {
    return (
        <div>
            <h1>Register</h1>
            <button onClick={() => setCurrentPage(Page.Login)}>Login</button>
        </div>
    );
}
