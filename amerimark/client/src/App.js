import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import Blog from './pages/Blog';
function App() {
  return (
    
    <Router>
      <div>
        <Nav />
        <br />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/services/1" component={Services} />
          <Route path="/services/2" component={Services} />
          <Route path="/services/3" component={Services} />
          <Route path="/services/4" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;