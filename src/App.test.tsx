import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders navbar", async () => {
  render(<Navbar />);
  const linkElement = await screen.findByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});
