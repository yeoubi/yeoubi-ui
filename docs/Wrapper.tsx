import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <React.Fragment>
      {children}
    </React.Fragment>
  </BrowserRouter>
);

export default Wrapper;
