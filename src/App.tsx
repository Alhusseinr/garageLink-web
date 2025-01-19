import React from "react";
import WaitlistForm from "./components/WaitlistForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
