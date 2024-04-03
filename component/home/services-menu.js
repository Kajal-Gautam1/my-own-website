import React from "react";

function ServicesMenu() {
  return (
    <div>
      <div data-component="service-menu">
        <section>
          <div className="color-fill">
            <div className="container">
              <div className="row mb-5">
                <div className="center heading-left mt-5 text-center">
                  Services provided by us.
                </div>
                <div className="center">
                  <div className=" heading-right text-center">
                    At Kajal's Freelance, we empower you to choose what suits
                    you best.
                  </div>
                </div>
              </div>
              <div className="row pb-5">
                <div className="d-flex mb-3 mt-3 justify-content-center flex-direction gap-3 mar-top">
                  <div className="insuranceBox">
                    <div className="row px-4 mt-4 mb-3 partner-heading">
                      Basic Project
                    </div>
                    <div className="row px-4 mb-4  partner-sentence">
                      Enhanced Basic Website Package: Kickstart your online
                      journey with a professional landing page featuring
                      essential information and a contact form. Perfect for
                      businesses seeking a polished online presence from the
                      start.
                    </div>
                  </div>
                  <div className="insuranceBox">
                    <div className="row px-4 mt-4 mb-3 partner-heading">
                      Standard Project
                    </div>
                    <div className="row px-4 mb-4  partner-sentence">
                      Standard Website Package: Transform your online presence
                      with a complete website featuring Home, About, Services,
                      Portfolio, and Contact pages. Tailored design, mobile
                      compatibility, SEO, and ongoing support included. Perfect
                      for businesses seeking a comprehensive online solution.
                      Get started today.
                    </div>
                  </div>
                  <div className="insuranceBox ">
                    <div className="row px-4 mt-4 mb-3 partner-heading">
                    Advanced Project
                    </div>
                    <div className="row px-4 mb-4  partner-sentence">
                      Advanced Website Package: Elevate your online presence
                      with standard features bolstered by enhanced
                      functionality, advanced plugins, and bespoke development.
                      Tailored for businesses seeking a cutting-edge digital
                      solution to surpass industry standards and stand out in
                      the digital realm.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServicesMenu;
