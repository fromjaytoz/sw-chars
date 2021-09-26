import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./components/Navbar/Navbar";
import App from "./App";

test("App renders navbar", async () => {
  render(<App />);
  const linkElement = await screen.findByTestId("navbar");
  expect(linkElement).toBeInTheDocument();
});

test("App renders form", async () => {
  render(<App />);
  const linkElement = await screen.findByTestId("form");
  expect(linkElement).toBeInTheDocument();
});
