import { render, screen } from "@testing-library/react";
import Home from "../Home/Home";

test("loading indicator shows on render", async () => {
  render(<Home />);
  const linkElement = screen.getByTestId("loading");
  expect(linkElement).toBeInTheDocument();
});
