import React from 'react';
import Navbar from '@theme-original/Navbar';
import WarningHeader from "../../components/warningHeader"

export default function NavbarWrapper(props) {
  return (
    <>
      <WarningHeader></WarningHeader>
      <Navbar {...props} />
    </>
  );
}
