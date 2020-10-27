import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={imgLogo} alt="goBarber Logo" />
        <form>
          <h1>Sign In</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            placeholder="Password"
            type="password"
          />

          <Button type="submit" value="test">
            Log in
          </Button>

          <a href="/">Forgot password</a>
        </form>

        <a href="/">
          <FiLogIn />
          Sign Up
        </a>
      </Content>

      <Background />
    </Container>
  </>
);

export default SignIn;
