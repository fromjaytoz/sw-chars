import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";

test("renders button", async () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});
