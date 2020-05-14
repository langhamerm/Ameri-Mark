import React, { Component } from "react";
import Footer from "../components/Footer";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import Card from "../components/Card";
import VidBlock from "../components/VidBlock";

import "./home.css";

class Home extends Component {
  // state = {
  //   Home: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };
  // componentDidMount() {
  //   this.loadHome();
  // }
  // loadHome = () => {
  //   API.getHome()
  //     .then(res =>
  //       this.setState({ Home: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadHome())
  //     .catch(err => console.log(err));
  // };
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadHome())
  //       .catch(err => console.log(err));
  //   }
  // };
  render() {
    return (
      <div>
      <Container fluid>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https:www.manilowsuites.com/wp-content/uploads/2016/01/chicago-skyline-sunset-night-reflections-hd-photography.jpg"
                alt="First slide"
                id="car-item"
              />
              <Carousel.Caption>
                {/* <h2>Ameri-Mark Inc</h2> */}
                {/* <p>
                    for over 30 years.
                  </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https:images3.alphacoders.com/707/707476.jpg"
                alt="Third slide"
                id="car-item"
              />

              <Carousel.Caption>
                {/* <h2 id="slide2">Over 30 years Experience</h2> */}
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https:wallpaperaccess.com/full/199945.jpg"
                alt="Third slide"
                id="car-item"
              />

              <Carousel.Caption>
                {/* <h2></h2> */}
                {/* <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row>
          
          <Col>
            <Card
              header= "Valuation Services"
              body="Ameri-Mark, Inc. is a full-service real estate appraisal company. We have the ability
          to perform a variety of appraisal reports, including forensic appraisal reviews and reconciliation reports
          for use in portfolio monitoring, loan modifications, work-outs, quality control, etc."
            />
          </Col>
          <Col>
            <Card
              header="Attorney CPA Services"
              body="Ameri-Mark, Inc. also completes legal appraisals for attorneys. If you're in need of dependable appraisal
              services, please call our office today."
            />
          </Col>
          <Col>
            <Card
              header="Real Estate Consulting"
              body="Real estate consulting is one of the many dependable real estate services offered by
              Ameri-Mark, Inc. To schedule your consultation with one of our experienced professionals, please call us
              today."
            />
          </Col>
          <Col>
            <Card
              header="Brokerage Services"
              body="Ameri-Mark, Inc. offers both residential and commercial real estate brokerage services."
            />
          </Col>
        </Row>
       
        <Row>
          <Col lg={5}>
            <Card
             header="" 
             body={ <VidBlock src="https://www.youtube.com/embed/8kAU3B9Pi_U"  />}
           />
          </Col>
          <Col lg={7}>
            <Card
              header="What is Real Estate Consulting?"
              body="Real estate consultants and realtors play very different roles in the housing market, though their duties and responsibilities might overlap at times. A consultant usually advises clients on building or investment activities in the market. A realtor helps clients buy or sell properties. Both professions typically require a real estate agent or broker's license in your state. You obtain one by completing an accredited course and passing a state exam.
            Real estate consulting firms provide research, analysis and advising services to clients such as construction developers, investment banks, mortgage lenders, materials producers, builders and property investors. Some consultants provide services to many types of business or investors, while others specialize in a particular type of client. As a consultant, you can either work for an established firm that already provides these services or start your own business."
            />
          </Col>
        </Row>
      </Container>
     
      </div>
    );
  }
}
export default Home;
