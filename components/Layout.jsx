import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Provider } from "react-redux";
import store from "../store/store";

function Layout({ children }) {
  return (
    <div className="relative">
      <Provider store={store}>
        <Nav />
        {children}
        <Footer />
      </Provider>
    </div>
  );
}

export default Layout;
