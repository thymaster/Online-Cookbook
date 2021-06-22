import React from "react";
import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <section className="sections create-account">
        <div>
          <div className="welcome-heading">
            <div className="catch-phrase">
              <span>
                <h1> Make the best</h1>
              </span>
              <div>Food/Drink</div>
              <span>in the world</span>
            </div>
            <span>
              <h2>For the artist in you, who just happen to use utensils</h2>
            </span>
            <div>
              <button>Create Account</button>
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
