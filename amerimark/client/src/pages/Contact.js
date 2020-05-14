import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 id="page-header" className="mt-4 mb-3">
          Contact
          <br />
        </h1>
        <ol id="breadcrumb" className="breadcrumb bg-dark">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Contact</li>
        </ol>
        {/* Content Row */}
        {/* /.row */}
        {/* Contact Form */}
        {/* In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. */}
        <div id="features" className="row">
          <div className="col-lg-8 mb-4">
            <h3 id="page-header">Send us a Message</h3>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block" />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                    data-validation-required-message="Please enter your phone number."
                  />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email address."
                  />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Message:</label>
                  <textarea
                    rows={10}
                    cols={100}
                    className="form-control"
                    id="message"
                    required
                    data-validation-required-message="Please enter your message"
                    maxLength={999}
                    style={{ resize: "none" }}
                    defaultval={""}
                  />
                </div>
              </div>
              <div id="success" />
              {/* For success/fail messages */}
              <button
               onClick={ window.open(`mailto:mark@ameri-mark.net?`)
              }
                type="submit"
                className="btn btn-dark"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* /.row */}
      </div>
    );
  }
}

export default Contact;
