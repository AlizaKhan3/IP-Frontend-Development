import React from 'react';
import FeaturesBg from '../assets/FeaturesBg.png';
import ObjectBg from '../assets/Object.png';
import ObjectImg from '../assets/Screen Effects.png';
import { IoCopyOutline } from "react-icons/io5"
import { IoDiamondOutline } from "react-icons/io5";

const Features = () => {
  return (
    <div className="row">
      <img
        src={FeaturesBg}
        className="img-fluid signimg"
        alt="..."
      />
      <div className="row d-flex justify-content-center align-items-center" style={{ position: "absolute", marginTop: "50px" }}>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 ">
          <div className="features-object">
            <img
              src={ObjectImg}
              className="img-fluid object-img"
              alt="..."
            />
            <img
              src={ObjectBg}
              className="img-fluid object-bg"
              alt="..."
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 px-5" style={{ color: "#fff" }}>
          <h1 className="mb-4">We Create Something New</h1>
          <p className="mb-4">
            We have created a new product that will help designers,
            developers and companies create websites for their
            startups quickly and easily.
          </p>
          <div className="row">
            <div className="col-6">
              <div className="card feature-card">
                <div className="card-body">
                  <IoCopyOutline />
                  <h5 className="card-title mt-3">
                    30 NEW FEATURE PAGES
                  </h5>
                  <p className="card-text">
                    Startup Framework contains components and complex blocks
                    which can easily.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card feature-card">
                <div className="card-body">
                  <IoDiamondOutline />
                  <h5 className="card-title mt-3">
                    USEFUL SYMBOL COMPONENTS
                  </h5>
                  <p className="card-text">
                    Samples will show you the feeling on how to play around
                    using the components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
