import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Masonry from "react-masonry-css";
//Scss
import "./eventInfo.scss";
//Assets
import Arrow from "../../assets/portfolio/arrow.svg";
import Preview1 from "../../assets/portfolio/project01/preview.png";
import Preview2 from "../../assets/portfolio/project02/preview.png";
import Preview3 from "../../assets/portfolio/project03/preview.png";
import Preview4 from "../../assets/portfolio/project04/preview.png";
import Preview5 from "../../assets/portfolio/project05/preview.png";
import Preview6 from "../../assets/portfolio/project06/preview.png";
//Components
import Button from "../ui-components/button/button";
import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class EventInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "1",
          preview: Preview1,
          title: "Lamp",
          tag: "branding",
        },
        {
          id: "2",
          preview: Preview2,
          title: "Smartwatch",
          tag: "web",
        },
        {
          id: "3",
          preview: Preview3,
          title: "Speakerphone",
          tag: "illustrations",
        },
        {
          id: "4",
          preview: Preview4,
          title: "Sneakers",
          tag: "web",
        },
        {
          id: "5",
          preview: Preview5,
          title: "Label",
          tag: "illustrations",
        },
        {
          id: "6",
          preview: Preview6,
          title: "lemons",
          tag: "branding",
        },
      ],
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  componentDidMount() {
    this.filterGallery("all");
  }

  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  filterMenuHover = (event) => {
    if(event) {
      this.setState({ filterMenuActive: true });
    }else {
      this.setState({ filterMenuActive: false });
    }
  }

  filterDropDownHandler = (filter) => {
    this.setState({ pickedFilterDropdown: filter, filterMenuActive: false });

    let projectsArr = [...this.state.filterResult];
    let result;

    if (filter === "NEWEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1));
    }else if (filter === "OLDEST") {
      result = projectsArr.sort((a, b) => (a.id > b.id ? 1 : -1)).reverse();
    }

    this.setState({ filterResult: result});
  }

  render() {
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} />
      ));
    }

    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };

    let filterDroppDown = null;
    if(this.state.filterMenuActive) {
      filterDroppDown = (
        <div className="portfolio__filter-menu shadow">
          <p className="font12" onClick={() => this.filterDropDownHandler("NEWEST")}>
            NEWEST
          </p>
          <p className="font12" onClick={() => this.filterDropDownHandler("OLDEST")}>
            OLDEST
          </p>
        </div>
      );
    }

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="LA BODA" />

          <p className="font20">
            Nos casaremos en el parador de Avila, un lugar privilegiado en la ciudad que tanto queremos
          </p>

          {/* EVENTOS DEL DÍA */}
          <div className="eventos">
            <div className="evento">
              <h3>Ceremonia</h3>
              <p className="hora">- 4 pm -</p>
              <p className="lugar"><strong>El salón</strong></p>
              <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
            </div>
            <div className="evento">
              <h3>Recepción</h3>
              <p className="hora">- 6 pm -</p>
              <p className="lugar"><strong>El vestíbulo</strong></p>
              <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
            </div>
            <div className="evento">
              <h3>Fiesta</h3>
              <p className="hora">- 8 pm -</p>
              <p className="lugar"><strong>La terraza</strong></p>
              <p className="direccion">Av. Fray Antonio Alcalde, Guadalajara</p>
            </div>
          </div>

          {/* GOOGLE MAPS BANNER */}
          <div className="google-maps-banner">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.724596858582!2d-4.704024224160014!3d40.65800087140181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd40f31c29e34033%3A0x8185b97acceb3f0a!2sParador%20de%20%C3%81vila!5e0!3m2!1ses!2ses!4v1734458192576!5m2!1ses!2ses"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    );
  }
}

export default EventInfo;
