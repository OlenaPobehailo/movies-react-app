import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <Link to="/" className={css.link}>Home</Link>
          </li>
          <li>
            <Link to="/movies"  className={css.link}>Movies</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
