import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Calculator from "./components/calculator";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Calculator />
      <Footer />
    </React.Fragment>
  );
}
