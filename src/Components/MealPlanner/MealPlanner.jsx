import React from "react";
import { Link } from "react-router-dom";

export const MealPlanner = () => {
  return (
    <div>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <p>
                    An advanced online playground for Tailwind CSS, including
                    support for things like:
                  </p>
                  <ul class="list-disc space-y-2">
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">Customizing your recipes.</p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">
                        Access your recipes from anywhere around the world
                      </p>
                    </li>
                    <li class="flex items-start">
                      <span class="h-6 flex items-center sm:h-7">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-cyan-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                      <p class="ml-2">Grocery List</p>
                    </li>
                  </ul>
                  <p>
                    Your one stop solution for all your cooking with our Online
                    Cookbook
                  </p>
                </div>
                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p>Want to explore more?</p>
                  <p>
                    <Link to="/register">
                      <a href="#" class="text-cyan-600 hover:text-cyan-700">
                        {" "}
                        Create an account &rarr;{" "}
                      </a>
                    </Link>
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
