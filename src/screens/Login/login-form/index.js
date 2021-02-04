import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function LoginForm () {
  const { t } = useTranslation();
  return (
    <div className="login-form-section">
      <Form className="login-form">
        <h4 className="font-main" className="login-form-title">{t('LOGIN.TITLE')}</h4>
        <h5 className="login-form-title-underline">And start discovering awesome work!</h5>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="switch-container">
          <span className="ml-1">{t('LOGIN.REMEMBER_ME')}</span>
          <label className="switch ml-auto">
            <input type="checkbox" id="nsfw-switch" value="nsfw-switch" />
            <span className="slider round"></span>
          </label>
        </div>
        <Button block type="submit" className="btn-artix mt-3">
          {t('LOGIN.SUBMIT')}
        </Button>
        <div className="mt-2 login-form-or-section" controlId="formBasicEmail">
          <div className="separator" />
          <span>{t('LOGIN.OR')}</span>
          <div className="separator" />
        </div>
        <Button block type="submit" className="btn-google">
          <i className="fab fa-google mr-2"></i>
          {t('LOGIN.GOOGLE')}
        </Button>
        <Button block type="submit" className="btn-facebook mt-2">
          <i className="fab fa-facebook mr-2"></i>
          {t('LOGIN.FACEBOOK')}
        </Button>
      </Form>
    </div>
  );
}