import React, { Fragment } from "react";

/* import Reel from "./components/reel/Reel"; */
//components
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Download from "./components/download/download";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
//styles
function App() {
    return (
        <Fragment>
            <Nav/>
            <Home />
            <About />
            <Services/>
            <Portfolio/>
            <Download />
            <Contact/>
            <Footer/>
        </Fragment>
    );
}

export default App;


