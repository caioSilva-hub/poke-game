import React from "react";
import { render } from "@testing-library/react";
import CityPage from "."; // Certifique-se de que o nome da importação está correto

test("renders city component", () => {
  const { getByText } = render(<CityPage />);
  const cityElement = getByText(/cidade/i);
  expect(cityElement).toBeInTheDocument();
});
