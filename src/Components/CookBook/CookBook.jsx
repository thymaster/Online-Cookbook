/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./CookBook.css";

export function CookBook() {
  return (
    <div className="grocery-list-container">
      <div className="vertical-navbar">
        <Link to="/cookbook">
          <a href="/cookbook" title="Cookbook">
            <svg
              data-testid="icon-book"
              viewBox="0 0 20 20"
              height="1.5em"
              width="1.5em"
              fill="#DDE2E3"
            >
              <path d="M17,5.95v10.351c0,0.522-0.452,0.771-1,1.16c-0.44,0.313-1-0.075-1-0.587c0,0,0-9.905,0-10.114c0-0.211-0.074-0.412-0.314-0.535c-0.24-0.123-7.738-4.065-7.738-4.065C6.827,2.115,6.299,1.782,5.595,2.144C4.926,2.488,4.562,2.862,4.469,3.038l8.18,4.482C12.866,7.634,13,7.81,13,8.036v10.802c0,0.23-0.142,0.476-0.369,0.585c-0.104,0.052-0.219,0.077-0.333,0.077c-0.135,0-0.271-0.033-0.386-0.104c-0.215-0.131-7.774-4.766-8.273-5.067c-0.24-0.144-0.521-0.439-0.527-0.658L3,3.385c0-0.198-0.023-0.547,0.289-1.032c0.697-1.084,3.129-2.317,4.36-1.678l8.999,4.555C16.865,5.342,17,5.566,17,5.95z"></path>
            </svg>
          </a>
        </Link>
        <br />
        <Link to="/meal-planner">
          <a href="/meal-planner" title="Meal Planner">
            <svg
              data-testid="icon-calendar"
              viewBox="0 0 20 20"
              height="1.5em"
              width="1.5em"
              fill="#DDE2E3"
            >
              <path d="M17,3h-1v2h-3V3H7v2H4V3H3C1.899,3,1,3.9,1,5v12c0,1.1,0.899,2,2,2h14c1.1,0,2-0.9,2-2V5C19,3.9,18.1,3,17,3z M17,17H3V9h14 V17z M6.5,1h-2v3.5h2V1z M15.5,1h-2v3.5h2V1z"></path>
            </svg>
          </a>
        </Link>
        <br />
        <Link to="/grocery-list">
          <a href="/grocery-list" title="Grocery List">
            <svg
              data-testid="icon-groceryCart"
              viewBox="0 0 20 20"
              height="1.5em"
              width="1.5em"
              fill="#DDE2E3"
            >
              <path d="M13,17c0,1.104,0.894,2,2,2c1.104,0,2-0.896,2-2c0-1.106-0.896-2-2-2C13.894,15,13,15.894,13,17zM3,17c0,1.104,0.895,2,2,2c1.103,0,2-0.896,2-2c0-1.106-0.897-2-2-2C3.895,15,3,15.894,3,17zM6.547,12.172L17.615,9.01C17.826,8.949,18,8.721,18,8.5V3H4V1.4C4,1.18,3.819,1,3.601,1H0.399C0.18,1,0,1.18,0,1.4L0,3h2l1.91,8.957L4,12.9v1.649c0,0.219,0.18,0.4,0.4,0.4H17.6c0.22,0,0.4-0.182,0.4-0.4V13H6.752C5.602,13,5.578,12.449,6.547,12.172z"></path>
            </svg>
          </a>
        </Link>
        <br />
        <Link to="/">
          <a href="/logout" title="See you again!">
            <svg
              data-testid="icon-logout"
              viewBox="0 0 20 20"
              height="1.5em"
              width="1.5em"
              fill="#DDE2E3"
            >
              <path d="M19,10l-6-5v3H6v4h7v3L19,10z M3,3h8V1H3C1.9,1,1,1.9,1,3v14c0,1.1,0.9,2,2,2h8v-2H3V3z"></path>
            </svg>
          </a>
        </Link>
      </div>
      <div className="none"></div>
      <div className="root-bar">
        <div className="logo-heading">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <svg
              fill="green"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-20 h-20 rounded-half"
              viewBox="0 0 122.88 120.4"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="cls-1"
                d="M3,103.28q33.87-.07,67.73,0a2.46,2.46,0,0,1,2.45,2.44c0,3.65-1.54,10.79-9.79,10.79H10.35c-8.25,0-9.78-7.14-9.78-10.79A2.45,2.45,0,0,1,3,103.28Zm56.86-59c18.83,14.5,25.55,8.78,36.34,3.46,8.27-4.07,11.5-7.93,21.54-3.86V29.1H59.88V44.28ZM96.62,24.65l3.78-14a3.42,3.42,0,0,1,1.82-2.3L117.7.44a3.48,3.48,0,0,1,3.4,6.07l-14.28,7.26-3,10.88.27-.84h16.5A2.22,2.22,0,0,1,122.77,26h0V54.26c0,18.35-10,32.59-28.74,34v25.82h14.55c1.23,0,2.21,1.94,2.21,3.16s-1,3.17-2.21,3.17H76.82l.48-.51a19.07,19.07,0,0,0,3.57-5.82h3.78V88.34c-1,0-2-.12-3-.23a15,15,0,0,0-1.06-2.57,13.5,13.5,0,0,0,1.26-1.89,14.16,14.16,0,0,0,1-11.25,23.44,23.44,0,0,0-4.81-8.35c-4.58-5.28-12.65-10.66-23.47-13.6V26a2.21,2.21,0,0,1,2.21-2.21H96.87l-.25.84ZM67.55,81.78H7a7,7,0,0,1-7-7H0c0-10,19.85-17.21,36.53-17.37,32.8-.33,47.52,24.36,31,24.36Zm-14-16.14a3.77,3.77,0,1,1-3.76,3.77,3.77,3.77,0,0,1,3.76-3.77Zm-32.81.27A3.77,3.77,0,1,1,17,69.68a3.77,3.77,0,0,1,3.76-3.77Zm16.28-3.59a3.77,3.77,0,1,1-3.77,3.77,3.77,3.77,0,0,1,3.77-3.77ZM73,91.38a1.13,1.13,0,0,1,.16.56c0,.13,0,.27,0,.41s0,.28,0,.4a1.17,1.17,0,0,1-.16.57c-.55,2.42-2.78,5.6-9.62,5.6H10.35c-6.84,0-9.06-3.17-9.62-5.6a1.17,1.17,0,0,1-.16-.57c0-.12,0-.26,0-.4a2.88,2.88,0,0,1,0-.41,1.13,1.13,0,0,1,.16-.56c.56-2.43,2.79-5.6,9.62-5.6H37.83L48,96.24,58,85.78h5.39c6.84,0,9.07,3.17,9.62,5.6Z"
              />
            </svg>
            <span className="ml-3 text-xl site-name">Bits n Bytes</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 tag-line">
            Cook anything you imagine
          </p>
        </div>
        <br />
        <div className="add-recipe">
          <div className="add-recipe-div">Add recipe</div>
        </div>
      </div>
      <div className="main-content"></div>
    </div>
  );
}
