import { PropagateLoader } from 'react-spinners';

import React from 'react';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <PropagateLoader color="#ff0000" />
    </div>
  );
};

export default Loader;
