// Layout.jsx
import React from 'react';
import {Navbar} from './Navbar.jsx'; // Adjust the path as necessary

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;