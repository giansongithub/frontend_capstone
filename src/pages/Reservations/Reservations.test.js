import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Reservations from "./Reservations";

test("renders the reservations component", () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );

  // Check if the component has be rendered correctly
  const reservationComponent = screen.getByTestId("reservations-component");
  expect(reservationComponent).toBeInTheDocument();
});
