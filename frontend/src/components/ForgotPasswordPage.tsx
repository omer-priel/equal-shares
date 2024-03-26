import { Container, TextField, Button, Typography } from '@mui/material';

import { Page } from "../types";

import logoImage from '../assets/logo.png';

export type Props = {
    setCurrentPage: (page: Page) => void;
};

export default function ForgotPasswordPage({ setCurrentPage }: Props) {
  const sendOnClick = () => {
    alert('Email sent');
  }

  const loginOnClick = () => {
    setCurrentPage(Page.Login);
  }

  const registerOnClick = () => {
    setCurrentPage(Page.Register);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className="w-full h-[300px] flex justify-center">
          <img className="w-[150px] h-[150px] my-[75px]" src={logoImage} alt="Logo" width={150} height={150} />
      </div>
      <div>
        <Typography variant="h5" component="h1" gutterBottom>
          Forgot Password
        </Typography>
        <Typography variant="body1">
          Send an email to the address below to reset your password.
        </Typography>
        <TextField
          variant="outlined"
          label="Email"
          required
          fullWidth
          margin="normal"
          autoFocus
        />
        <Button color="primary" variant="contained" className="mt-[20px]" fullWidth onClick={sendOnClick}>
          Send
        </Button>
        To Login Page
        <Button color="primary" variant="text" onClick={loginOnClick}>
          Login
        </Button>
        <br />
        Don't have an account?
        <Button color="primary" variant="text" onClick={registerOnClick}>
          Sign Up
        </Button>
      </div>
    </Container>
  );
}
