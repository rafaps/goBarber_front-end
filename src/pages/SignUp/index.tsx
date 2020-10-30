import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';

import imgLogo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />

        <Content>
          <img src={imgLogo} alt="goBarber Logo" />
          <Form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="name" placeholder="Name" icon={FiUser} />

            <Input
              name="password"
              icon={FiLock}
              placeholder="Password"
              type="password"
            />

            <Button type="submit" value="test">
              Send
            </Button>
          </Form>

          <a href="/">
            <FiArrowLeft />
            Back
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
