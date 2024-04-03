import React from "react";

function ContactNow({ message }) {
  return (
    <div>
      <div data-component="contact-now">
        <div className="laptop">
          <div className="container">
            <div className="row  py-5">
              <div className="col-8  mt-4">
                <div className="connect-message">{message}</div>
                <div className="normal-text mt-md-4 mt-3">
                  {" "}
                  <img
                    src="/images/phone.png"
                    className="phone-img img-fluid mx-2"
                    style={{ cursor: "pointer", width: "1.75rem" }}
                    alt=""
                  />
                  <span className="phone">9120050523</span>
                </div>
                <div className="normal-text mt-md-3 ">
                  {" "}
                  <img
                    src="/images/email.png"
                    className="email-img img-fluid mx-2"
                    style={{ cursor: "pointer", width: "2rem" }}
                    alt=""
                  />
                  <span className="email">gauatamkajal961@gmail.com</span>
                </div>
                <div>
                <button className="connect-button d-flex mt-4" type="submit">
                  <span
                    className="connect-text"
                    aria-hidden
                    onClick={() => Router?.push("/contact-us")}
                  >
                    Connect Now
                  </span>
                </button>
                </div>
              </div>
              <div className="col-lg-3 col-4 p-0 text-center ">
                <img
                  src="/images/contact-us.png"
                  alt=""
                  className="connect-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* mobile  */}

        <div className="mobile">
          {/* <div className="contact-now-mobile img-fluid"> */}
          <div className="container">
            <div className="row d-flex py-5 ">
              <div className="col-8 mt-4 ">
                <div className="connect-message">{message}</div>
                <div className="normal-text mt-md-4 mt-3">
                  {" "}
                  <img
                    src="/images/phone.png"
                    className="img-fluid mx-2"
                    style={{ cursor: "pointer", width: "1rem" }}
                    alt=""
                  />
                  <span className="phone">9120050523</span>
                </div>
                <div className="normal-text mt-md-5 ">
                  {" "}
                  <img
                    src="/images/email.png"
                    className="img-fluid mx-2"
                    style={{ cursor: "pointer", width: "1rem" }}
                    alt=""
                  />
                  <span className="email">gauatamkajal961@gmail.com</span>
                </div>
                <div>
                  <button className="connect-button d-flex mt-4" type="submit">
                    <span
                      className="connect-text"
                      aria-hidden
                      onClick={() => Router?.push("/contact-us")}
                    >
                      Connect Now
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-lg-3 col-4 p-0 text-center ">
                <img
                  src="/images/contact-us.png"
                  alt=""
                  className="connect-img img-fluid"
                />
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactNow;
