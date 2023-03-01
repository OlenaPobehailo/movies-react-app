import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <Link to="/" className={css.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies" className={css.link}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
      <Suspense >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
