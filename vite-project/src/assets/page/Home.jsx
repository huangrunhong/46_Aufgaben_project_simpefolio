import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { useState } from "react";
import Nav from "../components/Nav";

const Home = () => {
  const [lightmodel, setLightModel] = useState(false);
  return (
    <div className={lightmodel ? "light" : null}>
      <Nav setModel={setLightModel} getModel={lightmodel} />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default Home;
