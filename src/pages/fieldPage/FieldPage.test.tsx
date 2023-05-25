import { render } from "@testing-library/react";
import FieldPage from ".";

test("renders field component", () => {
  const { getByText } = render(<FieldPage />);
  const fieldElement = getByText(/campo/i);
  expect(fieldElement).toBeInTheDocument();
});
