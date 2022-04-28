import { render, screen } from "@testing-library/react"

describe("Given the Display component", () => {
  describe("When it receives 123456890,", () => {
    test ("Then it should render '123456890'", () => {
      const expectedText = "123456890";

      render(<Display />);
      const textDisplay = screen.getByText(expectedText);

      expect(textDisplay).toBeInTheDocument();
    })) 
  })
})
