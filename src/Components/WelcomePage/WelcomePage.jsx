/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { SliderData } from "../SliderData/SliderData";
import { MealPlanner } from "../MealPlanner/MealPlanner";
import { MakeOwn } from "../MakeOwn/MakeOwn";
import Typical from "react-typical";

import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <section className="sections create-account">
        <div className="welcome-section">
          <div className="welcome-heading">
            <div className="catch-phrase">
              <span>
                <h1 className="large-font"> Make the best</h1>
              </span>
              <p className="animated-font">
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Cakes",
                    2000,
                    "Fries",
                    2000,
                    "Salad",
                    2000,
                    "Toppings",
                    2000,
                    "Dressings",
                    2000,
                    "Food",
                    2000,
                    "Drink",
                    2000,
                    "and a lot more...",
                    2000,
                  ]}
                />
              </p>
              <span className="medium-font">in the world</span>
            </div>
            <span className="catch-tag">
              <h2>For the artist in you, who just happen to use utensils</h2>
            </span>
            <div>
              <Link to="/register">
                <button className="create-account-button">
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sections make-your-own">
        <MakeOwn />
      </section>
      <section className="sections add-recipes">
        <div>
          <ImageCarousel slides={SliderData} />
        </div>
      </section>
      <section className="sections organize-recipes">Grocery List</section>
      <section className="sections meal-planner">
        <MealPlanner />
      </section>
    </div>
  );
};
