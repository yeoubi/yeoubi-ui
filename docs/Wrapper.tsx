import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
import { GlobalStyle } from '@yeoubi/ui';

const Wrapper = ({ children }) => (
  <BrowserRouter>
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  </BrowserRouter>
);

export default Wrapper;