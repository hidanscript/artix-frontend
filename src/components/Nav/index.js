import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav
} from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const { t } = useTranslation();
  return (
    <div className="artix-nav">
      <Navbar bg="dark" className="artix-navbar" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="text-white font-main font-size-26">
            Artix
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {
            props.enableSearch && (
              <Form className="m-auto" inline>
                <FormControl type="text" placeholder={t('NAV.SEARCH')} className="artix-searchbar" />
              </Form>
            )
          }
          <Nav className={props.enableSearch ? '' : 'ml-auto' }>
            <Nav.Link href="#home">
              <Link to="/signup" className="font-main text-white">
                {t('NAV.SIGNUP')}
              </Link>
            </Nav.Link>
            <Nav.Link href="#link" className="font-main text-white">
              <Link to="/login" className="font-main text-white">
                {t('NAV.LOGIN')}
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
