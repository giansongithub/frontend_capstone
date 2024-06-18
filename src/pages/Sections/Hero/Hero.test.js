import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import Hero from "./Hero";

test("renders Hero component without errors", () => {
  render(
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );

  expect(screen.getByText("Little Lemon")).toBeInTheDocument();
  expect(screen.getByText("New York")).toBeInTheDocument();
  expect(
    screen.getByText(
      "Little Lemon is a neighborhood spot that attracts diners from all across the city. Located in New York City’s West Village, Little Lemon is “a little gem of a restaurant… with cooking consistently good and the young staff, attractive and efficient” (The New York Times). In addition to deliciously inventive Mediterranean food and a comfortable but energetic dining room."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Reserve a table")).toBeInTheDocument();
  expect(screen.getByAltText("Restarurant food")).toBeInTheDocument();
});
