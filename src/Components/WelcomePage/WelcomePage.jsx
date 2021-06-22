import React from "react";
import { Link } from "react-router-dom";
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
              <div className="animated-font">Food/Drink</div>
              <span className="medium-font">in the world</span>
            </div>
            <span>
              <h2 className="catch-tag">
                For the artist in you, who just happen to use utensils
              </h2>
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
        make your own recipes{" "}
      </section>
      <section className="sections add-recipes">add your recipes</section>
      <section className="sections organize-recipes">
        organize your own recipes
      </section>
      <section className="sections find-recipes">find new recipes</section>
      <section className="sections meal-planner">meal planner</section>
      <section className="sections subscription">subscription</section>
    </div>
  );
};
