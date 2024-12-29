import React, { useState } from "react";
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
    currentView: "home", // Controla qué vista se muestra
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
    this.setState({ userIsScrolled: window.pageYOffset > 80 });
  };

  closeMobileMenu = () => {
    this.setState({ mobileNavbarOpen: false });
  };

  mobileMenuOpen = () => {
    this.setState({ mobileNavbarOpen: true });
  };

  renderView = () => {
    const { currentView } = this.state;
    switch (currentView) {
      case "home":
        return (
          <>
            <Main />
            <EventInfo />
            <Carousel />
            <Indications />
            <Contact />
            <Attendance />
            <Footer onNavigate={(view) => this.setState({ currentView: view })} />
          </>
        );
      case "admin-login":
        return <AdminLogin onNavigate={(view) => this.setState({ currentView: view })} />;
      case "admin-dashboard":
        return <AdminDashboard />;
      default:
        return (
          <>
            <Main />
            <EventInfo />
            <Carousel />
            <Indications />
            <Contact />
            <Attendance />
            <Footer onNavigate={(view) => this.setState({ currentView: view })} />
          </>
        );
    }
  };

  render() {
    const { mobileNavbarOpen } = this.state;
    const backdrop = mobileNavbarOpen && <Backdrop closeMobileMenu={this.closeMobileMenu} isOpen />;
    const mobileNavbar = mobileNavbarOpen && <MobileNav
                                                isOpen={this.state.mobileNavbarOpen}
                                                closeMobileMenu={this.closeMobileMenu}
                                                onNavigate={(view) => this.setState({ currentView: view })} // Pasar onNavigate
                                              />
  ;

    return (
      <div className="App">
        {mobileNavbar}
        {backdrop}
        <DesktopNav
          userIsScrolled={this.state.userIsScrolled}
          mobileMenuOpen={this.mobileMenuOpen}
          onNavigate={(view) => this.setState({ currentView: view })} // Pasar onNavigate
        />

        {this.renderView()}
      </div>
    );
  }
}

export default App;
