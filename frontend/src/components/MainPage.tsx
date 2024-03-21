import { UserData } from "../types";

export type Props = {
    user: UserData;
    logout: () => void;
};

export default function MainPage({ user, logout }: Props) {
    return (
        <div>
            <h1>Main</h1>
            <p>Welcome {user.email}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
