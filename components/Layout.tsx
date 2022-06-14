import React, { ReactElement } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

type props = {
  page: ReactElement;
};
function Layout(props: props) {
  return (
    <>
      <NavBar />
      <main>{props.page}</main>
      <Footer />
    </>
  );
}

export default Layout;
