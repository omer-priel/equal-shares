import { Container, TextField, Button, Typography } from '@mui/material';

import { Page } from "../types";

import logoImage from '../assets/logo.png';

export type Props = {
    setCurrentPage: (page: Page) => void;
};

export default function RegisterPage({ setCurrentPage }: Props) {
  const registerOnClick = () => {
    alert('Email sent');
  }

  const loginOnClick = () => {
    setCurrentPage(Page.Login);
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography variant="h5" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          variant="outlined"
          label="Full Name"
          required
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          variant="outlined"
          label="Email"
          required
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          variant="outlined"
          label="Confirm Password"
          type="password"
          required
          fullWidth
          margin="normal"
        />
        <Button color="primary" variant="contained" className="mt-[20px]" fullWidth onClick={registerOnClick}>
          Sign Up
        </Button>
        To Login Page
        <Button color="primary" variant="text" onClick={loginOnClick}>
          Login
        </Button>
      </div>
    </Container>
  );
}
