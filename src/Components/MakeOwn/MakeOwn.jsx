import React from "react";

export const MakeOwn = () => {
  return (
    <div>
      <div className="make-section">
        <div className="content-container">
          <div className="section-image">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80"
              alt="picture of ingredients on various spoons"
            />
          </div>
          <div className="section-text">
            <div className="information">
              <b>Create anything you imagine</b>
              Bring out the master chef in you <br />
              with Bits n Bytes recipe editor. <br />
              Be as creative as you are. <br />
            </div>
            <div className="information">
              <b>All your recipes in one place</b>
              With all your work taken care by us, <br />
              you can just focus on <br />
              making the best ever food. <br />
            </div>
            <div className="information">
              <b>Meal Planner</b>
              Busy with your work? <br />
              Plan your meals ahead, <br />
              so that you can directly jump to business. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
