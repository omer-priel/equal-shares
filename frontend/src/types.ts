export enum Page {
    Register,
    ForgotPassword,
    Login,
    Main,
}

export type UserData = {
    token: string;
    email: string;
    password: string;
    voted: boolean;
};
