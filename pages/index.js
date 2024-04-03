import Head from "next/head";
import { Inter } from "next/font/google";
import WebsiteLayoutComponent from "@/component/websiteLayout/website-layout.component";
import Header from "@/component/common/header";
import styles from "../styles/Home.module.css";
import ServicesMenu from "@/component/home/services-menu";
import ContactNow from "@/component/home/contact-now";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <div data-component="home">
        <div className="laptop">
          <section className="section-height">
            <div className="home-back d-flex align-items-center">
              <div className="container text-center">
                <div className=" head-pad">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-6 p-0">
                      <h2 className="home-heading">
                        Welcome to Kajal's freelance
                        <br />
                        web development services
                      </h2>
                      <div className="heading-bottom-text">
                        Hi there! I'm Kajal, a freelance web developer
                        passionate about creating stunning, seamless websites.
                        Let's collaborate to bring your digital vision to life!
                      </div>
                      <div className=" get-btn mt-4 ">
                        <a href="#getStarted">
                          <button type="submit" className="get-quote-button">
                            <text className="quote-text">
                              Check Services
                              <img
                                src="/images/Vector.svg"
                                alt=""
                                className="img-fluid px-2"
                              />
                            </text>
                          </button>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-5 col-6 p-0">
                      <img
                        src="https://i.insider.com/60db77de36cf170019de8948?width=1136&format=jpeg"
                        alt=""
                        className="my-page-image img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mobile">
          <section className="section-height">
            <div className="home-back d-flex align-items-center">
              <div className="container text-center">
                <div className=" head-pad">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 p-0">
                      <h2 className="home-heading">
                        Welcome to Kajal's freelance
                        <br />
                        web development services
                      </h2>
                      <div className="heading-bottom-text">
                        Hi there! I'm Kajal, a freelance web developer
                        passionate about creating stunning, seamless websites.
                        Let's collaborate to bring your digital vision to life!
                      </div>
                      <div className=" get-btn mt-4 ">
                        <a href="#getStarted">
                          <button type="submit" className="get-quote-button">
                            <text className="quote-text">
                              Check Services
                              <img
                                src="/images/Vector.svg"
                                alt=""
                                className="img-fluid px-2"
                              />
                            </text>
                          </button>
                        </a>
                      </div>
                    </div>

                    <div className="col-12 p-0 mt-4">
                      <img
                        src="https://i.insider.com/60db77de36cf170019de8948?width=1136&format=jpeg"
                        alt=""
                        className="my-page-image img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div data-component="home">
          <div className="laptop">
            <section className="mb-5 mt-1">
              <div className="container-fluid">
                <div className="col-12 text-align-center">
                  <div className="headingI text-align-center pb-0 pb-md-3">
                    OUR OFFICIAL PROJECTS
                  </div>
                  <div className="laptop ">
                    <div className="slide-track d-flex text-align-center justify-content-evenly">
                      <div className="slide d-flex">
                        <img
                          src="/images/ombrellaLogo.svg"
                          alt="partner"
                          className="px-3"
                          style={{ height: "4rem" }}
                        />
                        <span style={{ fontSize: "2rem", fontWeight: "600" }}>
                          Ombrella
                        </span>
                      </div>
                      <div className="slide d-flex">
                        <img
                          src="/images/logo.png"
                          alt="partner"
                          className="px-3"
                          style={{ height: "3.5rem" }}
                        />
                      </div>
                      <div className="slide d-flex">
                        <img
                          src="https://www.aceplus.in/icons/aceplus-new-logo.png"
                          alt="partner"
                          style={{ height: "60px" }}
                          className="px-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mobile">
            <section className="mb-5 mt-1">
              <div className="container">
                <div className="col-12 text-align-center  justify-content-center">
                  <div className="headingI text-align-center pb-0 pb-md-3">
                    OUR OFFICIAL PROJECTS
                  </div>
                  <div className="mobile ">
                    <div className="slide-track text-align-center justify-content-center">
                      <div className="slide text-align-center justify-content-center mt-3 mb-2">
                        <img
                          src="/images/ombrellaLogo.svg"
                          alt="partner"
                          className="px-3"
                          style={{ height: "2rem" }}
                        />
                        <span>Ombrella</span>
                      </div>
                      <div className="slide text-align-center justify-content-center mt-3 mb-2">
                        <img
                          src="/images/logo.png"
                          alt="partner"
                          className="px-3"
                          style={{ height: "2rem" }}
                        />
                      </div>
                      <div className="slide text-align-center justify-content-center mt-3 mb-2">
                        <img
                          src="https://www.aceplus.in/icons/aceplus-new-logo.png"
                          alt="partner"
                          style={{ height: "30px" }}
                          className="px-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div id="getStarted">
          <ServicesMenu />
        </div>
        <div>
          <ContactNow message="Get the Best Project Delivery At Kajal's Freelance" />
        </div>
      </div>
    </>
  );
}
