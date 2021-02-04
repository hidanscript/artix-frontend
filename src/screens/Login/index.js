import React from 'react';
import Navigation from '../../components/Nav';
import LoginForm from './login-form';

export default function Login () {
  return (
    <div className="login-page">
      <Navigation enableSearch={false} />
      <LoginForm />
    </div>
  );
}