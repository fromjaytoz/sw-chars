import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import App from "./App";

test("renders navbar", async () => {
  render(<Navbar />);
  const linkElement = await screen.findByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});
