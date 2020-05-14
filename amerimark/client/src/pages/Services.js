import React, { Component } from "react";
import Footer from "../components/Footer";
import Service from "../components/Service";
// import API from "../utils/API";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Paginate from "../components/Paginate";
import Card from "../components/Card";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./serve.css";

class Services extends Component {
  render() {
    // console.log(this.props.match.url[10]);
    const page = this.props.match.url[10];
    switch (page) {
      case "1":
        return (
          <div>
            <Service
              img="https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/barber%20handshake.jpg?itok=KNWntI29"
              title="Appraisal and Valuation Services"
              h1="Real Estate Appraisals"
              h2="What Is a Reconciliation Report?"
              p1="Ameri-Mark, Inc. is a full-service real estate appraisal company. We have the ability to perform a variety of
        appraisal reports, including forensic appraisal reviews and reconciliation reports for use in portfolio
        monitoring, loan modifications, work-outs, quality control, etc."
              p2="When two or more appraisals are completed on the same property, a reconciliation report can be completed,
              which is a forensic review of all appraisals in question. A reconciliation report is then completed that
              identifies the most credible and reliable appraisal report. This is many times a better alternative than
              ordering a third or fourth appraisal."
            />
            <Paginate prev={"/services/1"} next={"/services/2"} />
          </div>
        );
      case "2":
        return (
          <div>
            <Service
              img="https://penguinhall.org/wp-content/uploads/wooden-judges-gavel.jpg"
              title="Attorney and CPA Real Estate Services"
              h1="Real Estate Appraisals"
              h2=""
              p1="As a state licensed certified general real estate appraiser and state licensed real estate broker, our owner, Mr. Langhamer, has been exposed to many areas in the real estate industry.
            Prior to his real estate career, he was a construction manager and estimator working on multi-million dollar projects, such as high-rise buildings, automobile manufacturing plants, airplane hangars, distribution facilities, apartment complexes, banks, retail developments, industrial buildings, schools, churches, and roads."
              p2="Mr. Langhamer is experienced testifying as an expert witness both inside and outside the courtroom. He also assists attorneys in exhibit preparation and writing cross examination scripts that are used against the opposing experts. He is extremely thorough with his research, and his main goal on a project is to know all of the comparable sales.

              Verifying the data with the assessors and recorders adds quality and credibility to his work. There are instances when it is difficult to verify data, and the agents involved in the sale are interviewed and the comparable sale is field measured to maximize the quality control aspect of the process."
            />
            <Paginate prev={"/services/1"} next={"/services/3"} />
          </div>
        );
      case "3":
        return (
          <div>
            <Service
              img="https://cdn3.vectorstock.com/i/1000x1000/50/12/business-meeting-in-office-vector-17745012.jpg"
              title="Real Estate Consulting"
              h1="Types of Consulting"
              h2=""
              p1="Highest and Best Use Analysis: We provide assistance to clients to determine what is physically possible, legally permissible, financially feasible, and maximally productive for a property.

              Market Analysis: We analyze market versus contract rent, estimate absorption rates through residual demand analysis, and identify various trends and influences in markets and segmented submarkets. We then provide a vacant land comparable market analysis of comparable sales with the same or similar zoning. This data is then used for initial purchase or excess land valuation analysis."
              p2="Investment Analysis: We assist investors with various methods of investment analysis to determine if a property meets and will continue to meet specific investment criteria of the investor(s) and/or lender(s).

              Feasibility Analysis: Our consultants help our clients determine the financial feasibility in the various areas of property management, brokerage, appraisal, and new construction. This is accomplished through feasibility rent analysis or pre-improvement versus post-improvement analysis in the remodeling, renovation, or rehabilitation of existing properties to determine if dollars invested will yield a positive or negative return on investment. Additionally, we determine viability for condominium conversions."
            />
            <Paginate prev={"/services/2"} next={"/services/4"}  />
          </div>
        );
      case "4":
        return (
          <div>
            <Service
              img="https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/barber%20handshake.jpg?itok=KNWntI29"
              title="Brokerage Services"
              h1="Residential Real Estate Brokerage Services"
              h2="Commercial Real Estate Brokerage Services"
              p1="Ameri-Mark, Inc. offers residential real estate brokerage services. We assist our residential clients with the buying and selling of residential real estate. We analyze and explore the market to assist our clients with verifying the range of the market value of properties with specific market data extracted from recent closed sales comparable properties. We are experts in representing both buyers and sellers in REO/foreclosure and short sales."
              p2="Ameri-Mark, Inc. offers commercial real estate brokerage services. We assist our commercial clients with the buying and selling of commercial real estate. Our commercial clients are assisted throughout the buying and selling process with the following research: highest and best use analysis, market analysis, investment analysis and/or feasibility analysis to solidify their decision making process. When we are asked why a property should be listed or sold at a certain dollar amount? We will extract, analyze and summarize the market data that is the basis of our recommendations to our clients. We are experts in representing both buyers and sellers in REO/foreclosure and"
            />
            <Paginate prev={"/services/3"} next={"/services/4"} />
          </div>
        );
      default:
        return (
          <div>
            <Service
              img="https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/barber%20handshake.jpg?itok=KNWntI29"
              title="Appraisal and Valuation Services"
              h1="Real Estate Appraisals"
              h2="What Is a Reconciliation Report?"
              p1="Ameri-Mark, Inc. is a full-service real estate appraisal company. We have the ability to perform a variety of
      appraisal reports, including forensic appraisal reviews and reconciliation reports for use in portfolio
      monitoring, loan modifications, work-outs, quality control, etc."
              p2="When two or more appraisals are completed on the same property, a reconciliation report can be completed,
      which is a forensic review of all appraisals in question. A reconciliation report is then completed that
      identifies the most credible and reliable appraisal report. This is many times a better alternative than
      ordering a third or fourth appraisal."
            />
  <Paginate prev={"/services/1"} next={"/services/2"} />
          </div>
        );
    }
  }
}
export default Services;
