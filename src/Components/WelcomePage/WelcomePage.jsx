import React from "react";
import "./WelcomePage.css";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <section className="sections create-account">create account</section>
      <section className="sections make-your-own">make your own recipes </section>
      <section className="sections add-recipes">add your recipes</section>
      <section className="sections organize-recipes">organize your own recipes</section>
      <section className="sections find-recipes">find new recipes</section>
      <section className="sections meal-planner">meal planner</section>
      <section className="sections subscription">subscription</section>
    </div>
  );
};
