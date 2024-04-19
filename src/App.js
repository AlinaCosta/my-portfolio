import Navbar from "./components/Navbar/Navbar";

import Header from "./container/Header/Header";
import About from "./container/About/About";
import Projects from "./container/Projects/Projects";
import Services from "./container/Services/Services";
import Contact from "./container/Contact/Contact";
import Footer from "./container/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
