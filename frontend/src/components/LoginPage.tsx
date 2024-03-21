import { useState } from "react";

import { Container, TextField, Button, Typography } from '@mui/material';

import { Page, UserData } from "../types";

import logoImage from '../assets/logo.png';

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
        <Container component="main" maxWidth="xs">
        <div className="w-full h-[300px] flex justify-center">
            <img className="w-[150px] h-[150px] my-[75px]" src={logoImage} alt="Logo" width={150} height={150} />
        </div>
        <div>
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
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
          <Button color="primary" variant="contained" className="mt-[20px]" fullWidth onClick={loginOnClick}>
            Login
          </Button>
          <Button color="primary" variant="text">
            Forgot password?
          </Button>
          <br />
          Don't have an account?
          <Button color="primary" variant="text">
            Sign Up
          </Button>
        </div>
      </Container>
    );
}