import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./style/App.scss";

// Components
import DesktopNav from "./components/navbar/desktop-nav";
import MobileNav from "./components/navbar/mobile-nav";
import Backdrop from "./components/navbar/backdrop";
import Main from "./components/main/main";
import EventInfo from "./components/eventInfo/eventInfo";
import Carousel from "./components/carousel/carousel";
import Indications from "./components/indications/indications";
import Attendance from "./components/contact/attendance";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import AdminLogin from "./components/admin-page/AdminLogin";
import AdminDashboard from "./components/admin-page/AdminDashboard";

class App extends React.Component {
  state = {
    userIsScrolled: false,
    mobileNavbarOpen: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.userIsScrolled);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.userIsScrolled);
  }

  userIsScrolled = () => {
    if (window.pageYOffset > 80) {
      this.setState({ userIsScrolled: true });
    } else {
      this.setState({ userIsScrolled: false });
    }
  };

  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };

  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  render() {
    const backdrop = this.state.mobileNavbarOpen ? (
      <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen={true} />
    ) : (
      <Backdrop closeMobileMenu={this.closeMobileMenu} />
    );

    const mobileNavbar = this.state.mobileNavbarOpen ? (
      <MobileNav isOpen={true} closeMobileMenu={this.closeMobileMenu} />
    ) : (
      <MobileNav />
    );

    return (
      <Router>
        <div className="App">
          {mobileNavbar}
          {backdrop}
          <DesktopNav
            userIsScrolled={this.state.userIsScrolled}
            mobileMenuOpen={this.mobileMenuOpen}
          />

          <Switch>
            {/* Página principal */}
            <Route path="/" exact>
              <Main />
              <EventInfo />
              <Carousel />
              <Indications />
              <Contact />
              <Attendance />
              <Footer />
            </Route>

            {/* Redirigir /wedding-invitation a la página principal */}
            <Route path="/wedding-invitation">
              <Redirect to="/" />
            </Route>

            {/* Página de inicio de sesión para administración */}
            <Route path="/admin-login" exact>
              <AdminLogin />
            </Route>

            {/* Página de panel de administración */}
            <Route path="/admin-dashboard" exact>
              <AdminDashboard />
            </Route>

            {/* Redirigir cualquier otra ruta a la página principal */}
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
