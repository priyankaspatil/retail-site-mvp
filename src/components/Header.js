import { Grid } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/images/ShoppingLogo1.jpeg";
import './Header.scss';

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Grid item xs={8}>
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Marley's Fashion logo"
            title="Marley's Fashion | Home"
          />
        </Link>
      </Grid>

      <Grid item xs={3}>
        <nav className="header__nav">
          <NavLink to="/" className={getClass}>
            Home
          </NavLink>
          <NavLink to="/wishlist" className={getClass}>
            My Wishlist
          </NavLink>
        </nav>
      </Grid>

    </header>
  );
}
