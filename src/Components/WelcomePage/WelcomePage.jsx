/* eslint-disable jsx-a11y/img-redundant-alt */
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
        <div className="make-section">
          <div className="content-container">
            <div className="section-image">
              <img
                src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="picture of ingredients on various spoons"
              />
            </div>
            <div className="section-text">
              <div>
                <h1 className="heading">Create anything you imagine</h1>
                <p className="para">
                  Bring out the master chef in you <br />
                  with Bits n Bytes recipe editor. <br />
                  Be as creative as you are.
                </p>
              </div>
              <div>
                <h1 className="heading">All your recipes in one place.</h1>
                <p className="para">
                  With all your work taken care by us, <br />
                  you can just focus on <br />
                  making the best ever food.
                </p>
              </div>
              <div>
                <h1 className="heading">Meal Planner</h1>
                <p className="para">
                  Busy with your work? <br />
                  Plan your meals ahead, <br />
                  so that you can directly jump to
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sections add-recipes">add your recipes</section>
      <section className="sections organize-recipes">
        organize your own recipes
      </section>
      <section className="sections find-recipes">find new recipes</section>
      <section className="sections meal-planner">meal planner</section>
    </div>
  );
};
